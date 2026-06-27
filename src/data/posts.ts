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
