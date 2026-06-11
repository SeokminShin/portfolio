export default function Publications() {
  const pubs = [
    {
      year: "2026",
      items: [
        { title: "Charge-Transfer Kinetics of Intercalation Reactions: A Measurement Challenge", journal: "ACS Energy Lett.", authors: "Y. Choi, H. Kweon, Seokmin Shin, S. D. Kang", link: "https://doi.org/10.1021/acsenergylett.6c01178" }
      ]
    },
    {
      year: "2024",
      items: [
        { title: "Advancements in electrochemical methanol synthesis from CO2: Mechanisms and catalyst developments", journal: "Nano Energy", authors: "Hojeong Lee, Namgyoo Park, Tae-Hoon Kong, Seontaek Kwon, Seokmin Shin, Sun Gwan Cha, Eunyoung Lee, Jihoo Cha, Siraj Sultan, Youngkook Kwon", link: "https://doi.org/10.1016/j.nanoen.2024.110099" },
        { title: "Directions of Oxygen Evolution Reaction Electrocatalyst Evaluation for Anion Exchange Membrane CO2 Electrolyzer", journal: "EES Catal.", authors: "Seontaek Kwon, Tae-Hoon Kong, Namgyoo Park, Pandiarajan Thangavel, Hojeong Lee, Seokmin Shin, Jihoo Cha, Youngkook Kwon", link: "https://doi.org/10.1039/D3CY01633D" }
      ]
    },
    {
      year: "2023",
      items: [
        { title: "Copper With an Atomic-scale Spacing for Efficient Electrocatalytic Co-reduction of Carbon Dioxide and Nitrate to Urea", journal: "Energy Environ. Sci.", authors: "Seokmin Shin, Siraj Sultan, Zong-Xian Chen, Hojeong Lee, Hansaem Choi, Tae-Ung Wi, Changhyun Park, Tae Won Kim, Chanhee Lee, Jihong Jeong, Hyeju Shin, Tae-Hee Kim, HyungKuk Ju, Hyung-Chul Yoon, Hyun-Kon Song, Hyun-Wook Lee, Minjun Cheng, Youngkook Kwon", link: "https://doi.org/10.1039/D3EE00008G" },
        { title: "Selectively Enhanced Electrocatalytic Oxygen Evolution within Nanoscopic Channels Fitting a Specific Reaction Intermediate for Seawater Splitting", journal: "Small", authors: "Seokmin Shin, Tae-Ung Wi, Tae-Hoon Kong, Chanhyun Park, Hojeong Lee, Jihong Jeong, Eunryeol Lee, Subhin Yoon, Tae-Hee Kim, Hyun-Wook Lee, Youngkook Kwon, Hyun-Kon Song", link: "https://doi.org/10.1002/smll.202206918" },
        { title: "In-situ Ionomer-free Catalyst Coated Membranes for Anion Exchange Membrane Water Electrolyzers", journal: "ACS Energy Lett.", authors: "Tae-Hoon Kong, Pandiarajan Thangavel, Seokmin Shin, Seontaek Kwon, Hyung-Kyu Choi, Hojeong Lee, Nam-Joon Park, Jin-Joo Woo, Youngkook Kwon", link: "https://doi.org/10.1021/acsenergylett.3c01418" }
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

  const renderAuthors = (authorsStr: string) => {
    const parts = authorsStr.split("Seokmin Shin");
    if (parts.length === 1) return <>{authorsStr}</>;
    
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="font-extrabold text-[#A31F34]">Seokmin Shin</span>
            )}
          </span>
        ))}
      </>
    );
  };

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
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mt-3 text-slate-600">
                    <span className="font-medium text-slate-800">{renderAuthors(pub.authors)}</span>
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
