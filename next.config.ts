import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: { unoptimized: true },
  // GitHub Pages serves a directory only when it contains an index.html.
  // Without this, `/portfolio/coco/` (and every other route requested with a
  // trailing slash) returns 404 because the export writes `coco.html` instead
  // of `coco/index.html`.
  trailingSlash: true,
};

export default nextConfig;
