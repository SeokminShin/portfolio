export default function Research() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Research Focus</h1>
        <p className="max-w-3xl text-lg text-slate-600">
          My academic foundation lies at the intersection of materials synthesis, advanced electro-analysis, and rigorous physical characterization. I am deeply driven to bridge explicit macro-scale experimental observations with fundamental, theoretical solid-state electrochemical thermodynamics.
        </p>
      </header>
      
      <div className="flex flex-col gap-12">
        {/* Topic 1 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Solid-State Electrochemical Thermodynamics</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#A31F34] italic">
              "Rethinking the origins of electromotive force and charge transport beyond conventional electrostatic interpretations."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Re-evaluating conventional electrochemical assumptions by strictly adhering to thermodynamic measurables, focusing on electrochemical potentials rather than physically ambiguous electrical potentials.</li>
              <li>Investigating the true driving forces of ion and electron motion in concentrated solutions and mixed conductors, rigorously separating chemical polarization from overvoltage.</li>
              <li>Redefining the thermodynamic basis of Nernstian behavior, local-equilibration phenomena, and chemical capacitance to prevent half-reaction evaluation pitfalls in battery systems.</li>
            </ul>
          </div>
        </section>

        {/* Topic 2 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Charge Transport & Defect Thermodynamics in MIECs</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
             <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#FF6C0C] italic">
              "Deconvoluting ambipolar diffusion and space-charge phenomena in battery materials."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Bridging macroscopic transport phenomena, such as chemical diffusion, with theoretical models of local charge non-neutrality and defect thermodynamics.</li>
              <li>Resolving the exact origins of junction potential differences and examining how transference numbers govern ambipolar diffusion in non-ideal solid solutions.</li>
              <li>Exposing the intrinsic limitations of conventional techniques (e.g., standard GITT analysis) in highly non-ideal storage materials, utilizing advanced theories of chemical capacitance.</li>
            </ul>
          </div>
        </section>

        {/* Topic 3 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">Advanced Electro-analysis of Battery Heterogeneity</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-slate-400 italic">
              "Validating thermodynamic solid-state theories through rigorous experimental deconvolutions."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Analyzing complicated electrochemical interphases by decomposing macroscopic kinetic observations into precise models of chemical polarization, ohmic resistance, and junction potentials.</li>
              <li>Tackling critical bottlenecks in battery composites—such as localized phase separations, contact resistance limits, and microscopic space-charge layers.</li>
              <li>Leveraging versatile characterization platforms (e.g., Synchrotron X-ray Spectroscopy and in-situ electro-analysis) to provide definitive experimental validation for complex thermodynamic models.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
