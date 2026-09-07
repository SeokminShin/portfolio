import type { MetadataRoute } from 'next';
import { posts } from '@/data/posts';

// sitemap.ts compiles to a Route Handler, and `output: export` refuses to
// collect one that has not been explicitly marked static.
export const dynamic = 'force-static';

const SITE_URL = 'https://seokminshin.github.io/portfolio';

/** `posts.ts` stores human-readable dates; fall back to the build date. */
function publishedAt(date: string): Date {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/research/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/publications/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/posts/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}/`,
      lastModified: publishedAt(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/coco/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
