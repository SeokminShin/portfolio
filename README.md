# Seokmin Shin — research portfolio

Source for [seokminshin.github.io/portfolio](https://seokminshin.github.io/portfolio/): research
itinerary, publication list, and long-form essays on physical electrochemistry.

Built with Next.js 16 (App Router) and Tailwind CSS v4, exported as a static site and published to
GitHub Pages.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000/portfolio — the `basePath` in
[`next.config.ts`](next.config.ts) applies in development too.

## Checks

| Command                 | What it does                                                            |
| ----------------------- | ----------------------------------------------------------------------- |
| `npm run lint`          | ESLint with `eslint-config-next` (core-web-vitals + TypeScript)         |
| `npm run check:privacy` | Fails on local filesystem paths in text files, or EXIF/GPS in `public/` |
| `npm run build`         | Static export to `out/`                                                 |
| `npm run og`            | Regenerates the social card at `public/og-card.png`                     |

All three run in CI on every pull request and on every push to `main`.

## Layout

```
src/app/                 Routes (App Router)
  page.tsx               Home
  research/              Research itinerary
  publications/          Publication list
  posts/                 Blog index + one directory per essay
  coco/                  Photo gallery
  layout.tsx             Shell, navigation, site-wide metadata
src/components/          Math (KaTeX), CVModal, PawIcon
src/data/posts.ts        Single source of truth for essays and their metadata
public/                  CV PDF and images, served under /portfolio/
scripts/                 Repository checks
```

### Adding an essay

1. Add an entry to the top of `posts` in [`src/data/posts.ts`](src/data/posts.ts).
2. Create `src/app/posts/<slug>/page.tsx` and export
   `export const metadata = postMetadata('<slug>')`.

The blog index, the research page cards, and the two featured cards on the homepage all read from
`posts.ts`, so nothing else needs updating.

### Images and assets

`public/` is copied verbatim into the export. Because `basePath` is `/portfolio`, `next/image`
`src` values and plain `href`s to static files include the prefix explicitly (for example
`/portfolio/coco/1.jpg`); `next/link` `href`s do not, since Next adds it automatically.

Photos must be stripped of EXIF before they are committed — `npm run check:privacy` enforces this.

### The social card

`public/og-card.png` (1200×630) is the Open Graph / Twitter card for every page. Edit the design in
[`scripts/generate-og-image.mjs`](scripts/generate-og-image.mjs) and run `npm run og` to rebuild it;
[`src/lib/site.ts`](src/lib/site.ts) points at it and builds the per-page `openGraph` / `twitter`
metadata through its `social()` helper.

Two things to know before "simplifying" this to Next's `opengraph-image` route convention, both of
which were tried and reverted:

- Under `output: export` that convention emits an **extensionless** file (`out/opengraph-image`).
  GitHub Pages derives Content-Type from the extension, so scrapers do not get `image/png`.
- It only reaches pages that do not declare their own `openGraph`. Declaring one replaces the
  parent's wholesale, so every inner page silently loses its card. That is also why each page calls
  `social()` rather than relying on inheritance.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) lints, runs the privacy check, builds,
verifies the shape of the export, and publishes `out/` to GitHub Pages. Pull requests run the same
checks without deploying.

> **Do not add `static_site_generator: next` to the `actions/configure-pages` step.** That input
> makes the action write its own `next.config.js` from a blank template — not from this repo's
> config — and Next loads `.js` in preference to `.ts`, so everything in
> [`next.config.ts`](next.config.ts) beyond `basePath` / `output` / `images.unoptimized` is silently
> discarded. That is how `trailingSlash` was dropped while CI stayed green. The "Verify export
> shape" step exists to catch a regression here.
