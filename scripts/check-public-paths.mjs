/**
 * Pre-publish privacy guard.
 *
 * Everything in this repository is served from a public GitHub Pages site, so
 * two classes of accident matter: local filesystem paths leaking into page
 * copy, and camera metadata (notably GPS) riding along inside `public/` photos.
 * This script fails the build on either.
 */
import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = process.cwd();
const selfPath = relative(projectRoot, fileURLToPath(import.meta.url));

const ignoredDirectories = new Set([".git", ".next", "node_modules", "out"]);

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".py",
  ".sh",
  ".toml",
  ".ts",
  ".tsx",
  ".txt",
  ".yaml",
  ".yml",
]);

const imageExtensions = new Set([".jpg", ".jpeg", ".tif", ".tiff"]);

const forbiddenPatterns = [
  { label: "local file URL", pattern: /\bfile:\/\//i },
  { label: "POSIX home directory", pattern: /\/(?:Users|home)\/[A-Za-z0-9._-]+\// },
  { label: "Windows drive path", pattern: /\b[A-Za-z]:\\/ },
  { label: "Windows UNC path", pattern: /(?:^|[^\\])\\\\[A-Za-z0-9._-]+\\/ },
  { label: "Google Drive mount", pattern: /내 드라이브|\bMy Drive\b/ },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".github") {
      continue;
    }

    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...(await collectFiles(absolutePath)));
      }
    } else {
      files.push(absolutePath);
    }
  }

  return files;
}

/**
 * Reports the JPEG/TIFF metadata segments that can carry location or device
 * details. Only the marker structure is inspected — no decoding required.
 */
function findImageMetadata(buffer) {
  const found = new Set();

  // TIFF files are one big metadata container; treat any as unsanitised.
  if (buffer.length > 4 && (buffer.readUInt16BE(0) === 0x4949 || buffer.readUInt16BE(0) === 0x4d4d)) {
    found.add("TIFF metadata");
    return [...found];
  }

  if (buffer.length < 4 || buffer.readUInt16BE(0) !== 0xffd8) {
    return [];
  }

  let offset = 2;
  while (offset < buffer.length - 3) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];

    // Standalone markers carry no payload.
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }

    // Start of scan: only compressed pixel data follows.
    if (marker === 0xda) {
      break;
    }

    const length = buffer.readUInt16BE(offset + 2);
    const identifier = buffer.toString("latin1", offset + 4, offset + 4 + Math.min(length, 30));

    if (marker === 0xe1 && identifier.startsWith("Exif")) {
      found.add(identifier.includes("GPS") ? "EXIF (with GPS tag)" : "EXIF");
    }
    if (marker === 0xe1 && identifier.includes("ns.adobe.com/xap")) {
      found.add("XMP");
    }
    if (marker === 0xed) {
      found.add("IPTC");
    }

    offset += 2 + length;
  }

  return [...found];
}

const findings = [];

for (const file of await collectFiles(projectRoot)) {
  const relativePath = relative(projectRoot, file);

  if (relativePath === selfPath) {
    continue;
  }

  const extension = extname(file).toLowerCase();

  if (textExtensions.has(extension)) {
    const lines = (await readFile(file, "utf8")).split(/\r?\n/);

    for (const { label, pattern } of forbiddenPatterns) {
      lines.forEach((line, index) => {
        if (pattern.test(line)) {
          findings.push(`${relativePath}:${index + 1} — ${label}`);
        }
      });
    }
  } else if (imageExtensions.has(extension)) {
    const segments = findImageMetadata(await readFile(file));

    if (segments.length > 0) {
      findings.push(`${relativePath} — image metadata: ${segments.join(", ")}`);
    }
  }
}

if (findings.length > 0) {
  console.error("Privacy check failed:");
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log("No private local paths or image metadata detected.");
}
