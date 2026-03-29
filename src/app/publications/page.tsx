export default function Publications() {
  const pubs = [
    {
      year: "2024",
      items: [
        { title: "Advancements in electrochemical methanol synthesis from CO2: Mechanisms and catalyst developments", journal: "Nano Energy", authors: "H. Lee, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1016/j.nanoen.2024.110099" },
        { title: "Directions of Oxygen Evolution Reaction Electrocatalyst Evaluation for Anion Exchange Membrane CO2 Electrolyzer", journal: "EES Catal.", authors: "S. Kwon, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1039/D3CY01633D" }
      ]
    },
    {
      year: "2023",
      items: [
        { title: "Copper With an Atomic-scale Spacing for Efficient Electrocatalytic Co-reduction of Carbon Dioxide and Nitrate to Urea", journal: "Energy Environ. Sci.", authors: "Seokmin Shin, et al.", link: "https://doi.org/10.1039/D3EE00008G" },
        { title: "Selectively Enhanced Electrocatalytic Oxygen Evolution within Nanoscopic Channels Fitting a Specific Reaction Intermediate for Seawater Splitting", journal: "Small", authors: "Seokmin Shin, et al.", link: "https://doi.org/10.1002/smll.202206918" },
        { title: "In-situ Ionomer-free Catalyst Coated Membranes for Anion Exchange Membrane Water Electrolyzers", journal: "ACS Energy Lett.", authors: "T.-H. Kong, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1021/acsenergylett.3c01418" }
      ]
    },
    {
      year: "2021-2022",
      items: [
        { title: "Metal-nitrogen intimacy of the nitrogen-doped ruthenium oxide for facilitating electrochemical hydrogen production", journal: "Appl. Catal. B: Environ.", authors: "Y. Lee, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1016/j.apcatb.2021.120873" },
        { title: "Double activation of oxygen intermediates of oxygen reduction reaction by dual inorganic/organic hybrid electrocatalysts", journal: "Nano Energy", authors: "D.-G. Lee, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1016/j.nanoen.2021.106048" },
        { title: "Breaking the Linear Scaling Relationship by a Proton Donor for Improving Electrocatalytic Oxygen Reduction Kinetics", journal: "ACS Catal.", authors: "D.-G. Lee, ..., Seokmin Shin, et al.", link: "https://doi.org/10.1021/acscatal.1c02934" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Publications</h1>
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-2 mb-4">
          <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
            A selection of my peer-reviewed articles and research contributions.
          </p>
          <a href="https://scholar.google.com/citations?user=O_j4EIEAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100/80 text-slate-800 font-bold rounded-full hover:bg-[#A31F34] hover:text-white transition-all duration-300 whitespace-nowrap w-fit shadow-sm border border-slate-200 group">
            <span className="text-xl group-hover:scale-110 transition-transform">🎓</span>
            <span>Google Scholar</span>
          </a>
        </div>
      </header>

      <div className="flex flex-col gap-12">
        {pubs.map((group, idx) => (
          <section key={idx} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#A31F34] border-b-2 border-slate-100 pb-2">{group.year}</h2>
            <div className="flex flex-col gap-4">
              {group.items.map((pub, pIdx) => (
                <a key={pIdx} href={pub.link} target="_blank" rel="noopener noreferrer" className="block group p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#FF6C0C] transition-all">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#A31F34] transition-colors leading-snug">{pub.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-3 text-slate-600">
                    <span className="font-semibold text-slate-800">{pub.authors}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="italic font-medium text-[#FF6C0C]">{pub.journal}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
