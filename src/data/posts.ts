export interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  themeColor: 'amber' | 'crimson';
  /**
   * Withheld from the site while true. The essay drops out of `posts`, so the
   * blog index, the homepage cards, the research page, the sitemap and the card
   * generator all skip it in one move.
   *
   * Taking it out of routing is a separate step, because the route exists as a
   * file rather than as data: move src/app/posts/<slug>/ to _<slug>/, which Next
   * excludes from routing along with everything under it. Undo both to republish.
   */
  draft?: boolean;
}

/** Every essay ever written here, drafts included. */
const allPosts: Post[] = [
  {
    title: "The Curve We Cannot Read: On the Structural Indistinguishability of Interfacial Kinetics",
    date: "September 15, 2026",
    excerpt: "Why Butler–Volmer, its resistance-corrected cousins, and Marcus–Hush–Chidsey/CIET kinetics all agree near equilibrium, diverge only where the data cannot yet be trusted, and what breaking that degeneracy would require.",
    slug: "kinetic-model-degeneracy",
    category: "Core Philosophy",
    themeColor: "crimson",
    // Unpublished pending a content revision; the route sits in
    // src/app/posts/_kinetic-model-degeneracy/ until then.
    draft: true
  },
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
 * The published essays, newest first. Every page and the card generator reads
 * this, so unpublishing one is a matter of setting `draft` rather than deleting
 * anything.
 */
export const posts: Post[] = allPosts.filter((entry) => !entry.draft);

/**
 * Looks up a published post by slug. Throws at build time rather than rendering
 * an empty page, so a renamed route can never ship with a silently missing entry.
 *
 * Resolving against `posts` rather than `allPosts` is deliberate: restoring a
 * route from its private folder without clearing `draft` then fails the build
 * instead of shipping a page that nothing links to.
 */
export function getPost(slug: string): Post {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(
      `No published post for slug "${slug}" in src/data/posts.ts — ` +
        `either the entry is missing or it is still marked draft.`,
    );
  }
  return post;
}
