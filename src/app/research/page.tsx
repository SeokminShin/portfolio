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
            <em>This profound shift in my research philosophy was deeply inspired by <a href="https://sdkang.org" target="_blank" rel="noopener noreferrer" className="font-bold text-[#A31F34] hover:underline transition-colors not-italic">Prof. Dongmin Kang</a>. I am immensely grateful for his rigorous framework, and I continuously strive to fill my academic gaps under his guidance.</em>
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
              </div>
            </div>
          </section>

          {/* NEW SECTION: Numerical Audit */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-slate-900">Numerical Audit & Diagnostic Reliability</h3>
              <p className="text-slate-500 font-medium">Quantifying interpretation artifacts in transient electrochemical techniques.</p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="lg:col-span-3 flex flex-col gap-5">
                <p className="text-slate-700 leading-relaxed">
                  I specialize in performing <strong>numerical audits</strong> on widely used electrochemical diagnostic protocols (e.g., GEIS, LA-GEIS). By reconstructing synthetic datasets from physically-grounded ODE solvers, I identify systematic artifacts—such as the <strong>'Symmetry Trap'</strong>—where conventional interpretation methods yield distorted kinetic parameters ($\alpha, i_0$).
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Identification of structural artifacts in non-linear interpretations",
                    "Robustness auditing of diagnostic reliability via synthetic recovery tests",
                    "Physically-consistent parameter extraction in non-ideal energy systems"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FF6C0C] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2 relative group mt-4 lg:mt-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#A31F34] to-[#FF6C0C] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-2xl bg-white">
                  <img 
                    src="/portfolio/audit_tafel.png" 
                    alt="Numerical Audit of Tafel Slope" 
                    className="w-full h-auto transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-900">Dimensionless Recovery Test</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* THE TURNING POINT (BRIDGE) */}
      <div className="relative py-12 my-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t-4 border-dashed border-slate-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-8 py-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center gap-5 text-center max-w-2xl transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,108,12,0.15)] hover:border-[#FF6C0C]">
            <span className="bg-[#FF6C0C]/15 text-[#FF6C0C] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">The Turning Point</span>
            <h3 className="text-3xl font-extrabold text-slate-900">My Academic Transition</h3>
            <p className="text-slate-600 text-base leading-relaxed px-4">
              Discover why I shifted my focus from surface-level synthetic evaluations towards rigorous thermodynamic and physicochemical frameworks of real energy systems.
            </p>
            <Link 
              href="/posts/academic-transition" 
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#A31F34] focus-visible:outline-none focus-visible:ring-2 hover:scale-105"
            >
              Read the full essay &rarr;
            </Link>
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
