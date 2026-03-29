import Link from 'next/link';

export default function BlogIndex() {
  const posts = [
    {
      title: "The Turning Point: From Catalysis to Fundamental Thermodynamics",
      date: "March 2026",
      excerpt: "Reflections on the limitations of macroscopic screening and my deliberate pivot towards fundamental electrochemical and physical frameworks.",
      slug: "academic-transition"
    }
  ];

  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="flex flex-col gap-4 border-b-2 border-slate-100 pb-6">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-[#A31F34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 9-3-3-3 3"/><path d="M11 18h6a2 2 0 0 0 2-2V6"/></svg>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Blog & Reflections</h1>
        </div>
        <p className="max-w-2xl text-lg text-slate-600">
          A collection of active essays, ongoing thoughts, and academic notes on physical electrochemistry, thermodynamics, and life.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {posts.map((post, i) => (
          <Link key={i} href={`/posts/${post.slug}`} className="group block p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[#FF6C0C]">
            <article className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#A31F34] uppercase tracking-wider">{post.date}</span>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#FF6C0C] transition-colors">{post.title}</h2>
              <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
              <span className="text-sm font-bold text-slate-900 mt-4 flex items-center gap-2 group-hover:gap-4 transition-all">
                Read post <span aria-hidden="true" className="text-[#FF6C0C]">&rarr;</span>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
