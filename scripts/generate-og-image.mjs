/**
 * Regenerates the social cards:
 *
 *   public/og-card.png      the default card, used by every non-essay page
 *   public/og/<slug>.png    one card per essay, titled with that essay
 *
 * Committed as plain assets rather than produced by Next's `opengraph-image`
 * route convention, for two reasons found by trying that convention first:
 *
 *   1. Under `output: export` it emits an extensionless file
 *      (out/opengraph-image). GitHub Pages derives Content-Type from the
 *      extension, so scrapers would not receive image/png.
 *   2. It only reaches pages that do not declare their own `openGraph`.
 *      Declaring one replaces the parent's wholesale, so every inner page
 *      silently lost its card.
 *
 * src/lib/site.ts references these files by absolute URL instead, and derives
 * the per-essay path from the same slug this script writes.
 *
 * The essay list is imported straight from src/data/posts.ts — Node strips the
 * types — which is why that file deliberately has no runtime imports.
 *
 * Run with:  npm run og
 */
import { ImageResponse } from "next/og.js";
import { mkdir, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { posts } from "../src/data/posts.ts";

const CRIMSON = "#A31F34";
const ORANGE = "#FF6C0C";
const INK = "#0F172A";
const BODY = "#475569";
const MUTED = "#94A3B8";
const SIZE = { width: 1200, height: 630 };
const SITE = "seokminshin.github.io/portfolio";

const PUBLIC_DIR = new URL("../public/", import.meta.url);
const POST_CARD_DIR = new URL("og/", PUBLIC_DIR);

const text = (style, children) => h("div", { style: { display: "flex", ...style } }, children);

/** Shell shared by every card: the crimson-to-orange brand bar plus a body column. */
const frame = (children) =>
  h("div", { style: { width: "100%", height: "100%", display: "flex", background: "#F8FAFC" } }, [
    h("div", {
      key: "bar",
      style: {
        width: 24,
        height: "100%",
        display: "flex",
        background: `linear-gradient(180deg, ${CRIMSON} 0%, ${ORANGE} 100%)`,
      },
    }),
    h(
      "div",
      {
        key: "body",
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 76px",
        },
      },
      children
    ),
  ]);

const siteCard = () =>
  frame([
    text(
      { key: "kicker", fontSize: 26, letterSpacing: 6, fontWeight: 700, color: ORANGE, textTransform: "uppercase" },
      "Research Portfolio"
    ),
    text(
      { key: "name", fontSize: 104, fontWeight: 800, color: INK, letterSpacing: -3, marginTop: 18 },
      "Seokmin Shin"
    ),
    text({ key: "topic", fontSize: 50, fontWeight: 700, color: CRIMSON, marginTop: 6 }, "Electrochemical Thermodynamics"),
    h("div", {
      key: "rule",
      style: { display: "flex", width: 132, height: 6, background: ORANGE, marginTop: 34, marginBottom: 30 },
    }),
    text(
      { key: "blurb", fontSize: 30, color: BODY, lineHeight: 1.4, maxWidth: 900 },
      "Decoupling interfacial charge transport, chemical capacitance, and hidden kinetics in non-ideal electrochemical systems."
    ),
    text({ key: "url", fontSize: 24, color: MUTED, marginTop: 40 }, SITE),
  ]);

/**
 * Titles run from 31 to 67 characters, so the size steps down to keep the
 * longest ones inside the 630px canvas without clipping.
 */
function titleSize(title) {
  if (title.length > 55) return 60;
  if (title.length > 40) return 70;
  return 84;
}

const postCard = (post) => {
  const accent = post.themeColor === "amber" ? ORANGE : CRIMSON;

  return frame([
    text(
      { key: "kicker", fontSize: 26, letterSpacing: 6, fontWeight: 700, color: accent, textTransform: "uppercase" },
      post.category
    ),
    text(
      {
        key: "title",
        fontSize: titleSize(post.title),
        fontWeight: 800,
        color: INK,
        letterSpacing: -2,
        lineHeight: 1.15,
        marginTop: 22,
        maxWidth: 1000,
      },
      post.title
    ),
    h("div", {
      key: "rule",
      style: { display: "flex", width: 132, height: 6, background: accent, marginTop: 34, marginBottom: 30 },
    }),
    text({ key: "byline", fontSize: 30, fontWeight: 700, color: BODY }, "Seokmin Shin"),
    text({ key: "meta", fontSize: 24, color: MUTED, marginTop: 14 }, `${post.date}  ·  ${SITE}`),
  ]);
};

/** Renders one card and asserts it really is a 1200x630 PNG before writing it. */
async function render(element, target) {
  const png = Buffer.from(await new ImageResponse(element, SIZE).arrayBuffer());

  if (png[0] !== 0x89 || png.toString("latin1", 1, 4) !== "PNG") {
    throw new Error(`ImageResponse did not return a PNG for ${target.pathname}`);
  }
  if (png.readUInt32BE(16) !== SIZE.width || png.readUInt32BE(20) !== SIZE.height) {
    throw new Error(
      `unexpected dimensions for ${target.pathname}: ${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`
    );
  }

  await writeFile(target, png);
  return png.length;
}

await mkdir(POST_CARD_DIR, { recursive: true });

const written = [
  ["og-card.png", await render(siteCard(), new URL("og-card.png", PUBLIC_DIR))],
];

for (const post of posts) {
  const name = `og/${post.slug}.png`;
  written.push([name, await render(postCard(post), new URL(`${post.slug}.png`, POST_CARD_DIR))]);
}

for (const [name, bytes] of written) {
  console.log(`wrote ${name} — ${SIZE.width}x${SIZE.height}, ${(bytes / 1024).toFixed(0)} KB`);
}
console.log(`${written.length} cards total`);
