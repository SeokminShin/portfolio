import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const projectRoot = process.cwd();
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
const forbiddenPatterns = [
  { label: "local file URL", pattern: new RegExp(["file", ":", "//"].join(""), "i") },
  { label: "macOS user directory", pattern: new RegExp(["/", "Users", "/"].join("")) },
];

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".github") {
      continue;
    }

    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...await collectTextFiles(absolutePath));
      }
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(absolutePath);
    }
  }

  return files;
}

const findings = [];

for (const file of await collectTextFiles(projectRoot)) {
  const content = await readFile(file, "utf8");
  const lines = content.split(/\r?\n/);

  for (const { label, pattern } of forbiddenPatterns) {
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        findings.push(`${relative(projectRoot, file)}:${index + 1} (${label})`);
      }
    });
  }
}

if (findings.length > 0) {
  console.error("Private local paths detected:");
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log("No private local paths detected.");
}
