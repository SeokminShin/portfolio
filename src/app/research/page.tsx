export default function Research() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Research Focus</h1>
        <p className="max-w-3xl text-lg text-slate-600">
          My academic foundation lies at the intersection of materials synthesis, electrocatalysis, and rigorous physical characterization. I am deeply driven to bridge explicit macro-scale experimental observations with fundamental, theoretical solid-state physicochemical frameworks.
        </p>
      </header>
      
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">1. Thermodynamics & Fundamental Charge Transport</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#A31F34] italic">
              "Deciphering non-ideal charge and ionic transport beyond conventional limits."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Pioneering mechanistic frameworks that seamlessly bridge macroscopic electrochemical kinetics (e.g., Butler-Volmer equations) with microscopic thermochemical phenomenons.</li>
              <li>Exploring non-ideal solid solutions, questioning conventional diffusion metrics (such as GITT limitations), and resolving the thermodynamic origins of charge transport.</li>
              <li>Understanding Proton-Coupled Electron Transfer (PCET) energy landscapes and quantum mechanical models in complex electrocatalytic environments.</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">2. Revealing Hidden Kinetics via Advanced Electro-analysis</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
             <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-[#FF6C0C] italic">
              "Overcoming macroscopic constraints through microscopic phase analysis."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Analyzing fundamental electrochemical interphases by deconvoluting macroscopic kinetic observations into precise, mechanistic step-by-step factors.</li>
              <li>Tackling critical bottlenecks in battery heterogeneity, including the experimental deconvolution of exact contact resistance and localized phase separation phenomena within battery composites.</li>
              <li>Designing advanced cell architectures dedicated to identifying intermediate modulations that circumvent strict energetic Linear Scaling Relationships (LSRs).</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#A31F34]">3. Bridging Theory with Operando & In-situ Observations</h2>
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FF6C0C] transition-all">
            <p className="text-slate-700 font-semibold mb-4 bg-slate-50 p-3 rounded border-l-4 border-slate-400 italic">
              "Providing definitive experimental validation for thermodynamic solid-state theories."
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Leveraging versatile synthetic proficiencies with robust characterization platforms (e.g., Synchrotron X-ray Absorption Spectroscopy, Scanning Transmission X-ray Microscopy, HR-TEM, and Raman).</li>
              <li>Developing proprietary in-situ / operando analytical cells to capture real-time PCET dynamics, bond formations, and intermediate speciation.</li>
              <li>Demonstrating the capability to rigorously evaluate and realize theoretical kinetic models inside practical, dynamic electrochemical systems.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
