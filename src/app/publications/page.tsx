export default function Publications() {
  const pubs = [
    {
      year: "2026",
      items: [
        { title: "Probing the Depths of Battery Heterogeneity", journal: "Joule (Under Review)", authors: "Stephen D. Kang, et al." },
        { title: "Contact resistance limits in modern battery electrodes", journal: "Nature Energy", authors: "Stephen D. Kang" },
      ]
    },
    {
      year: "2025",
      items: [
        { title: "Fictitious phase separation in mixed conductors", journal: "Nature Materials", authors: "Stephen D. Kang, et al." },
        { title: "The pitfalls of the mobility concept in charge transport", journal: "Advanced Materials", authors: "Stephen D. Kang" },
        { title: "Thermodynamic origin of Fick's Law in multi-particle systems", journal: "Physical Review Letters", authors: "Stephen D. Kang" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Publications</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          A selection of our recent peer-reviewed articles. For a full list, please visit my Google Scholar profile.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {pubs.map((group, idx) => (
          <section key={idx} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">{group.year}</h2>
            <div className="flex flex-col gap-4">
              {group.items.map((pub, pIdx) => (
                <article key={pIdx} className="group p-5 rounded-lg border border-slate-100 bg-white shadow-sm hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{pub.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-3 text-slate-600">
                    <span className="font-medium text-slate-800">{pub.authors}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="italic text-slate-600">{pub.journal}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
