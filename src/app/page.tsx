import Image from "next/image";
import Link from "next/link";
import CVModal from "@/components/CVModal";
import PawIcon from "@/components/PawIcon";
import { posts } from "@/data/posts";

const milestones = [
  {
    tag: "Previous Research",
    title: "Fitting Specific Reaction Intermediates",
    date: "UNIST (~2024)",
    description: "Overcame linear scaling relationships (LSRs) via atomic-scale spacing and self-tandem active sites to drive complex multi-reactant electrocatalysis.",
  },
  {
    tag: "Presentation",
    title: "Gordon Research Conference",
    date: "Jan 2024",
    description: "Presented research on electrochemical C-N bond formation from Carbon Dioxide and Nitrogen Oxygenates.",
  },
  {
    tag: "Award",
    title: "Samsung Human-Tech Award",
    date: "Spring 2024",
    description: "Received paper awards from Samsung Advanced Institute of Technology for outstanding research.",
  },
];

export default function Home() {
  // The two most recent essays, read straight from the shared post list so the
  // homepage cannot drift out of sync with /posts.
  const featured = posts.slice(0, 2);

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-between gap-12 sm:flex-row">
        <div className="flex flex-col gap-6 sm:w-[65%] text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#A31F34] to-[#FF6C0C] sm:text-5xl py-1 pb-2">
            Seokmin Shin
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed md:text-xl">
            My research interests lie in understanding the fundamental driving forces behind complex electrochemical phenomena. I aim to bridge macroscopic experimental observations with precise physicochemical frameworks. Guided by rigorous thermodynamic derivations, I strive to decouple complex interfacial charge transport, chemical capacitance, and hidden kinetic behaviors across various electrochemical processes.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <Link
              href="/research"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#A31F34] px-6 text-sm font-medium text-white shadow-md transition-all hover:bg-[#85192A] hover:-translate-y-0.5"
            >
              Explore Research
            </Link>
            <Link
              href="/publications"
              className="inline-flex h-11 items-center justify-center rounded-md border-2 border-slate-200 bg-white px-6 text-sm font-medium shadow-sm transition-all hover:border-[#FF6C0C] hover:text-[#FF6C0C] hover:-translate-y-0.5"
            >
              View Publications
            </Link>
            <CVModal />
          </div>
        </div>
        <div className="sm:w-[35%] flex justify-center sm:justify-end">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-xl sm:h-56 sm:w-56 transform transition duration-500 hover:scale-105 hover:rotate-1">
             <Image
               src="/portfolio/seokmin.jpg"
               alt="Seokmin Shin Profile Picture"
               fill
               sizes="(min-width: 640px) 224px, 176px"
               className="object-cover"
               priority
             />
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="flex flex-col gap-6 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b-2 border-slate-100 pb-2">Key Milestones &amp; Topics</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((item, i) => (
            <div key={i} className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#FF6C0C]">
              <div className="flex justify-between items-start gap-2 mb-3">
                <span className="inline-flex px-2.5 py-1 text-[10px] leading-tight font-extrabold uppercase tracking-wider text-[#A31F34] bg-[#A31F34]/10 rounded-md text-left">
                   {item.tag}
                </span>
                <span className="text-[11px] font-bold text-slate-500 shrink-0 mt-0.5">
                  {item.date}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#FF6C0C] transition-colors mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Reflections Section */}
      <section className="flex flex-col gap-8 pt-8">
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Latest Reflections</h2>
          <Link href="/posts" className="text-sm font-bold text-[#FF6C0C] hover:underline flex items-center gap-1 group">
            All Posts <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {featured.map((post, i) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className={`group p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${
                post.themeColor === 'amber' ? 'hover:border-[#FF6C0C]' : 'hover:border-[#A31F34]'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  post.themeColor === 'amber' ? 'text-[#FF6C0C]' : 'text-[#A31F34]'
                }`}>
                  {i === 0 ? 'Latest Essay' : 'Featured Essay'} • {post.date}
                </span>
              </div>
              <h3 className={`text-xl font-bold text-slate-900 mt-1 mb-3 transition-colors ${
                post.themeColor === 'amber' ? 'group-hover:text-[#FF6C0C]' : 'group-hover:text-[#A31F34]'
              }`}>
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Coco Section */}
      <section className="flex flex-col items-center gap-6 pt-12 pb-8 border-t-2 border-dashed border-slate-200 mt-8">
        <div className="flex items-center gap-3">
          <PawIcon className="w-8 h-8 text-[#FF6C0C]" />
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Meet Coco!</h2>
          <PawIcon className="w-8 h-8 text-[#FF6C0C]" />
        </div>
        <p className="text-center text-slate-600 max-w-lg">
          My deeply beloved puppy, <strong>Coco</strong>, who acts as my Principal Paw-vestigator and provides endless emotional support during long hours of research.
        </p>
        <Link href="/coco" className="relative overflow-hidden w-48 h-48 rounded-full border-[6px] border-[#FF6C0C]/30 flex flex-col items-center justify-end bg-slate-100 shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-3 group pb-4">
          <Image
            src="/portfolio/coco/main.jpg"
            alt="Coco"
            fill
            sizes="192px"
            className="object-cover z-0 group-hover:scale-110 transition-transform duration-700"
          />
          <span className="relative z-10 text-xs font-bold flex flex-col items-center gap-1 group-hover:text-[#FF6C0C] bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-md transition-colors text-slate-900 shadow-sm border border-white/20">
            🐶 View Gallery
          </span>
        </Link>
      </section>
    </div>
  );
}
