import type { Metadata } from 'next';

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  themeColor: 'amber' | 'crimson';
}

export const posts: Post[] = [
  {
    title: "The Number We Agree to Trust: pH and the Architecture of Convention",
    date: "July 31, 2026",
    excerpt: "On individual ion activities, the Bates–Guggenheim convention, chemical capacitance, and why the questions we ask about battery kinetics might be arriving one step too early.",
    slug: "ph-convention-architecture",
    category: "Core Philosophy",
    themeColor: "amber"
  },
  {
    title: "The Potential We Do Not Measure",
    date: "June 27, 2026",
    excerpt: "Rethinking electrochemical voltage through the Gibbs–Guggenheim principle and discovering why a voltmeter measures thermodynamics, not electrostatic potentials.",
    slug: "potential-we-do-not-measure",
    category: "Core Philosophy",
    themeColor: "crimson"
  },
  {
    title: "The Measurement Challenge: Decoupling Intercalation Kinetics",
    date: "June 15, 2026",
    excerpt: "Reflecting on our viewpoint paper in ACS Energy Letters and exploring why redox-potential shifts render transient kinetics measurements model-dependent.",
    slug: "measurement-challenge",
    category: "Viewpoint Review",
    themeColor: "crimson"
  },
  {
    title: "Product Leaves, Product Stays: Chemical Capacitance",
    date: "April 29, 2026",
    excerpt: "Unraveling the fundamental distinctions between Electrocatalysis and Battery Science through the lens of Chemical Capacitance.",
    slug: "chemical-capacitance",
    category: "Core Philosophy",
    themeColor: "amber"
  },
  {
    title: "The Turning Point: From Catalysis to Fundamental Thermodynamics",
    date: "March 15, 2026",
    excerpt: "Reflections on the limitations of macroscopic screening and my deliberate pivot towards fundamental electrochemical and physical frameworks.",
    slug: "academic-transition",
    category: "The Turning Point",
    themeColor: "crimson"
  }
];

/**
 * Looks up a post by slug. Throws at build time rather than rendering an empty
 * page, so a renamed route can never ship with a silently missing entry.
 */
export function getPost(slug: string): Post {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`No post found for slug "${slug}" in src/data/posts.ts`);
  }
  return post;
}

/** Per-essay page metadata, derived from the single source of truth above. */
export function postMetadata(slug: string): Metadata {
  const post = getPost(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/posts/${post.slug}`,
    },
  };
}
