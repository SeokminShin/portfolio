export default function Research() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Research Areas</h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Our group focuses on understanding the thermodynamic and kinetic properties of materials to build better energy storage and conversion devices. By isolating atomic and mesoscopic interactions, we push the frontiers of modern electrochemistry.
        </p>
      </header>
      
      <div className="flex flex-col gap-16">
        {/* Topic 1 */}
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 aspect-video bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center text-blue-400 overflow-hidden shadow-inner">
             {/* Replace with actual image later */}
             <span className="text-sm font-medium">Degradation Visualization</span>
          </div>
          <div className="flex flex-col gap-4 md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-900">Battery Degradation Mechanisms</h2>
            <p className="text-slate-600 leading-relaxed">
              We investigate how materials degrade over time. By probing battery heterogeneity, we can isolate the primary factors that lead to capacity fade, from contact resistance increases to microscopic phase separations. Understanding these mechanics is crucial to designing longer-lasting cells.
            </p>
          </div>
        </section>

        {/* Topic 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-8 items-start">
          <div className="w-full md:w-1/3 aspect-video bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-center text-indigo-400 overflow-hidden shadow-inner">
             <span className="text-sm font-medium">Charge Transport Model</span>
          </div>
          <div className="flex flex-col gap-4 md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-900">Advanced Charge Transport</h2>
            <p className="text-slate-600 leading-relaxed">
              Bridging the gap between empirical observations and fundamental theories. We analyze the pitfalls of common mobility concepts and study non-classical phenomena, such as T-squared resistivity in novel perovskites, to discover more efficient conductive materials.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
