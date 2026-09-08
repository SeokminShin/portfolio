/**
 * Regenerates the shared social card at public/og-card.png.
 *
 * Committed as a plain asset rather than produced by Next's `opengraph-image`
 * route convention, for two reasons found by trying that convention first:
 *
 *   1. Under `output: export` it emits an extensionless file
 *      (out/opengraph-image). GitHub Pages derives Content-Type from the
 *      extension, so scrapers would not receive image/png.
 *   2. It only reaches pages that do not declare their own `openGraph`.
 *      Declaring one replaces the parent's wholesale, so every inner page
 *      silently lost its card.
 *
 * src/lib/site.ts references this file by absolute URL instead.
 *
 * Run with:  npm run og
 */
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";

const CRIMSON = "#A31F34";
const ORANGE = "#FF6C0C";
const SIZE = { width: 1200, height: 630 };

const OUT = new URL("../public/og-card.png", import.meta.url);

const text = (style, children) => h("div", { style: { display: "flex", ...style } }, children);

const card = h(
  "div",
  { style: { width: "100%", height: "100%", display: "flex", background: "#F8FAFC" } },
  [
    // Brand bar, echoing the site's crimson-to-orange gradient.
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
      [
        text(
          { key: "kicker", fontSize: 26, letterSpacing: 6, fontWeight: 700, color: ORANGE, textTransform: "uppercase" },
          "Research Portfolio"
        ),
        text(
          { key: "name", fontSize: 104, fontWeight: 800, color: "#0F172A", letterSpacing: -3, marginTop: 18 },
          "Seokmin Shin"
        ),
        text(
          { key: "topic", fontSize: 50, fontWeight: 700, color: CRIMSON, marginTop: 6 },
          "Electrochemical Thermodynamics"
        ),
        h("div", {
          key: "rule",
          style: { display: "flex", width: 132, height: 6, background: ORANGE, marginTop: 34, marginBottom: 30 },
        }),
        text(
          { key: "blurb", fontSize: 30, color: "#475569", lineHeight: 1.4, maxWidth: 900 },
          "Decoupling interfacial charge transport, chemical capacitance, and hidden kinetics in non-ideal electrochemical systems."
        ),
        text({ key: "url", fontSize: 24, color: "#94A3B8", marginTop: 40 }, "seokminshin.github.io/portfolio"),
      ]
    ),
  ]
);

const png = Buffer.from(await new ImageResponse(card, SIZE).arrayBuffer());

if (png[0] !== 0x89 || png.toString("latin1", 1, 4) !== "PNG") {
  throw new Error("ImageResponse did not return a PNG");
}
if (png.readUInt32BE(16) !== SIZE.width || png.readUInt32BE(20) !== SIZE.height) {
  throw new Error(`unexpected dimensions: ${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`);
}

await writeFile(OUT, png);
console.log(`wrote ${OUT.pathname.split("/").pop()} ??${SIZE.width}x${SIZE.height}, ${(png.length / 1024).toFixed(0)} KB`);
