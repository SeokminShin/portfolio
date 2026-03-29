export default function Research() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Research Interests</h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Seeking rigorous theoretical and mechanistic frameworks grounded in experimental electrochemistry, with transformational exposure to frontier research in energy conversion systems.
        </p>
      </header>
      
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Electrochemistry based on Theoretical & Thermochemical Frameworks</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#A31F34] italic">
              "Understanding proton/electron transfer under electro-/thermochemical regime by the language of quantum mechanics."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Investigating mechanistic frameworks that bridge electrochemical kinetics (e.g., Butler-Volmer, Marcus theory) with thermochemical free energy landscapes.</li>
              <li>Exploring quantum mechanical models of electron/proton transfer in electrocatalysis focusing on tunneling and nonadiabatic transitions.</li>
              <li>Applying chemical potential-based frameworks to interpret PCET and bond activations.</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Mechanistic Electrocatalysis & Analytical System Design</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
             <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#FF6C0C] italic">
              "Deconvolution of kinetic factors for mechanism study using electrochemical analysis."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Fundamental understanding of electrochemical interphases (phase boundaries of system).</li>
              <li>Exploring to circumvent energetic LSRs through interfacial intermediate modulation and altered PCET.</li>
              <li>Designing cell systems for the analytical deconvolution of kinetic factors during electrocatalysis.</li>
              <li>Deconvolution of mechanistic factors from observed kinetics through advanced electro-analysis.</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Operando and in-situ Analysis</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-slate-400 italic">
              "Mechanism study utilizing various operando and in-situ analysis."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Study of PCET dynamics and bond formation using X-ray based techniques (XAFS, STXM).</li>
              <li>Study of electron transfer to surface adsorbed species using spectroscopy analysis (Raman, electrochemical scanning transmission).</li>
              <li>Development of in-situ/operando analytical systems for dynamic analysis.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
