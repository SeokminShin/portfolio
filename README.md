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

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) lints, runs the privacy check, builds,
and publishes `out/` to GitHub Pages. Pull requests run the same checks without deploying.
