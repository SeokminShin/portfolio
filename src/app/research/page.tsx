import Link from 'next/link';

export default function Research() {
  return (
    <div className="flex flex-col gap-20 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Research Itinerary</h1>
        <div className="max-w-4xl flex flex-col gap-5">
          <p className="text-lg text-slate-600 leading-relaxed pr-4">
            My academic journey is a continuous evolution from macroscopic catalyst engineering toward unearthing the most fundamental physicochemical rules governing <strong>electrochemical processes</strong>.
          </p>
          <p className="text-base text-slate-500 leading-relaxed border-l-4 border-slate-200 pl-4">
            <em>This profound shift in my research philosophy was deeply inspired by <a href="https://sdkang.org" target="_blank" rel="noopener noreferrer" className="font-bold text-[#A31F34] hover:underline transition-colors not-italic">Prof. Stephen Dongmin Kang</a>. I am immensely grateful for his rigorous framework, and I continuously strive to fill my academic gaps under his guidance.</em>
          </p>
        </div>
      </header>
      
      {/* PRESENT & FUTURE */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Present & Future Focus</h2>
          <span className="px-3 py-1 text-xs font-bold bg-[#A31F34] text-white rounded-full">Current Direction</span>
        </div>
        
        <div className="flex flex-col gap-8 mt-4">
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#A31F34]">Fundamental Electrochemical Dynamics</h3>
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#FF6C0C] transition-all duration-500 group">
              <p className="text-slate-700 font-semibold mb-6 bg-slate-50 p-4 rounded-xl border-l-4 border-[#FF6C0C] italic leading-relaxed">
                "Decoupling precise thermodynamic driving forces and transport phenomena in <strong>highly non-ideal electrochemical processes</strong>."
              </p>
              <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  My research focus has evolved from macroscopic material screening toward strictly deciphering the thermodynamic origins of charge transport. By exclusively adhering to <strong>measurable electrochemical observables</strong>, I seek to <strong>decouple</strong> complex interfacial variables—such as <strong>charge transfer kinetics</strong> and <strong>non-ideal transport behaviors</strong>—into precise physical models. 
                </p>
                <p>
                  This transition represents a deliberate move towards providing definitive validations for transport and kinetic behaviors in <strong>highly non-ideal energy systems</strong>, bridging macroscopic observations with the underlying <strong>interfacial charge dynamics</strong>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ACADEMIC ESSAYS (BRIDGE) */}
      <div className="relative py-12 my-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t-4 border-dashed border-slate-200"></div>
        </div>
        <div className="relative flex justify-center w-full">
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-white px-8 py-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center gap-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,108,12,0.15)] hover:border-[#FF6C0C]">
              <span className="bg-[#FF6C0C]/15 text-[#FF6C0C] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">The Turning Point</span>
              <h3 className="text-2xl font-extrabold text-slate-900">My Academic Transition</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-2 flex-grow">
                Discover why I shifted my focus from surface-level synthetic evaluations towards rigorous thermodynamic and physicochemical frameworks of real energy systems.
              </p>
              <div className="text-xs font-bold text-slate-400 mt-auto">March 15, 2026</div>
              <Link 
                href="/posts/academic-transition" 
                className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#A31F34] focus-visible:outline-none focus-visible:ring-2 hover:scale-105 w-full"
              >
                Read the full essay &rarr;
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white px-8 py-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center gap-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(163,31,52,0.15)] hover:border-[#A31F34]">
              <span className="bg-[#A31F34]/15 text-[#A31F34] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">Core Philosophy</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Catalysis vs. Batteries</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-2 flex-grow">
                Unraveling the fundamental distinctions between Electrocatalysis and Battery Science through the lens of Chemical Capacitance.
              </p>
              <div className="text-xs font-bold text-slate-400 mt-auto">April 29, 2026</div>
              <Link 
                href="/posts/chemical-capacitance" 
                className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#A31F34] focus-visible:outline-none focus-visible:ring-2 hover:scale-105 w-full"
              >
                Read the full essay &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PAST EXPERIENCES */}
      <div className="flex flex-col gap-8 opacity-80 hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-4 border-b-2 border-slate-200 pb-2">
          <h2 className="text-2xl font-bold text-slate-600">Past Foundations</h2>
          <span className="px-3 py-1 text-xs font-bold bg-slate-300 text-slate-700 rounded-full">Prior Work</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Multi-reactant Electrocatalysis</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">Investigating mechanisms under competing reactants and developing catalysts for complex multi-reactant electrochemical systems.</p>
            <p className="text-xs font-mono text-slate-500 font-semibold bg-slate-200 inline-block px-2 py-1 rounded">UNIST / PI: Youngkook Kwon</p>
          </div>
          
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Intermediate Binding Energy</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">Controlling energetic linear scaling relationships (LSR) by experimental demonstration of atomic scale spacings into metal oxide catalysts.</p>
            <p className="text-xs font-mono text-slate-500 font-semibold bg-slate-200 inline-block px-2 py-1 rounded">UNIST / Advisor: Hyun-Kon Song</p>
          </div>
          
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 md:col-span-2">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Organic/Inorganic Hybrid Catalysts</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">Enhanced electrochemical performance via associative activation and altered proton transfer steps. Developed synthetic methods for bi-functional oxygen evolution and reduction catalysts (Ni, Co, Fe, Pt-based).</p>
            <p className="text-xs font-mono text-slate-500 font-semibold bg-slate-200 inline-block px-2 py-1 rounded">UNIST / Advisor: Hyun-Kon Song</p>
          </div>
        </div>
      </div>

    </div>
  );
}
