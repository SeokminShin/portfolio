import Link from 'next/link';
import Script from 'next/script';

export default function PotentialWeDoNotMeasurePost() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* MathJax Configurations & Load */}
      <Script id="mathjax-config" strategy="beforeInteractive">
        {`
          window.MathJax = {
            tex: {
              inlineMath: [['\\\\(', '\\\\)']],
              displayMath: [['$$', '$$']]
            }
          };
        `}
      </Script>
      <Script 
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" 
        strategy="lazyOnload" 
      />

      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3 text-sm font-bold text-[#FF6C0C] uppercase tracking-wider">
          <Link href="/posts" className="hover:text-[#A31F34] transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Blog
          </Link>
          <span className="text-slate-300">•</span>
          <span>Core Philosophy</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium">June 27, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          The Potential We Do Not Measure
        </h1>
        <p className="text-lg text-slate-500 font-medium font-sans">
          Rethinking electrochemical voltage through the Gibbs–Guggenheim principle and discovering why a voltmeter measures thermodynamics, not electrostatic potentials.
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-serif">
        
        {/* Dedication block with styled highlight for Prof. Kang */}
        <div className="bg-[#A31F34]/5 border-l-[6px] border-[#A31F34] p-8 my-10 rounded-r-xl shadow-inner not-prose">
          <p className="m-0 font-medium text-slate-900 text-lg italic leading-relaxed">
            &quot;Before diving into this essay, I would like to express my deepest gratitude to <span className="text-[#A31F34] font-bold not-italic">Professor Stephen Dongmin Kang</span>. To me, who assumed I &quot;know&quot; electrochemistry, he taught the profound importance of &quot;knowing precisely&quot;—a lesson that inspired this writing.&quot;
          </p>
        </div>

        <p className="mb-6">
          Electrochemistry begins with a deceptively simple number.
        </p>

        <p className="mb-6">
          A voltmeter displays a voltage. A pH meter gives a relative potential reading. A battery has an open-circuit voltage. An electrochemical double layer exhibits a potential drop. A Pourbaix diagram is drawn on an axis labeled {"\\(E\\) vs pH"}.
        </p>

        <p className="mb-6">
          Because these numbers are so familiar, it is tempting to imagine that electrochemistry is, at its core, the science of measuring electrical potential differences inside matter. We treat voltage as a direct electrostatic property, assuming the role of thermodynamics is simply to explain why that voltage has a particular value.
        </p>

        <p className="mb-6">
          But the more I examined electrochemical thermodynamics, the less obvious this became. What does a voltmeter actually measure? What does an electrode potential actually refer to?
        </p>

        <p className="mb-6">
          I thought I had answers to both. I did not.
        </p>

        <p className="mb-6">
          The Gibbs–Guggenheim principle cuts right through that comfort.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"The Thermodynamic Split: \\(\\tilde{\\mu}_i = \\mu_i + z_i F \\phi\\)"}</h3>

        <p className="mb-6">
          The principle, originally emphasized by J. Willard Gibbs and later made explicit by E. A. Guggenheim, states that the electrical potential difference between two phases of different chemical composition cannot be measured. The problem is not a limitation of our instruments, but a fundamental property of thermodynamics: the electrostatic potential difference is not a separate, measurable observable in condensed matter.
        </p>

        <p className="mb-6">
          To see why, consider how electrochemistry defines the energy of a charged species. For a species {"\\(i\\)"} with charge {"\\(z_i\\)"}, the total work required to bring it into a phase is its electrochemical potential, {"\\(\\tilde{\\mu}_i\\)"}:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-4 rounded-xl border border-slate-100">
          {"$$ \\tilde{\\mu}_i = \\mu_i + z_i F \\phi $$"}
        </div>

        <p className="mb-6">
          Here, {"\\(\\mu_i\\)"} captures the non-electrostatic contributions—solvation, chemical bonds, entropy—while {"\\(z_i F \\phi\\)"} carries the electrostatic energy of the inner potential {"\\(\\phi\\)"}.
        </p>

        <p className="mb-6">
          The equation looks clean. But it introduces a trap. To actually measure {"\\(\\Delta \\phi\\)"} between two phases, you would need to transfer a charge without any of the chemical interactions changing—no solvation shift, no adsorption, no dispersion. That is not physically possible. An ion cannot be stripped of its chemical nature. The decomposition of {"\\(\\tilde{\\mu}_i\\)"} is a modeling choice, not a physical separation. <span className="font-semibold text-[#A31F34] bg-[#A31F34]/5 px-2 py-0.5 rounded">The total is operational; the split is conceptual.</span>
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Voltage is Not \\(\\Delta \\phi\\): The Metal–Metal Contact"}</h3>

        <p className="mb-6">
          A classic example makes this concrete. Imagine two different metals initially isolated. Because they have different Fermi levels, their electron chemical potentials differ.
        </p>

        <p className="mb-6">
          When connected electrically, electrons flow until Fermi levels equilibrate. This creates a real electrostatic potential difference ({"\\(\\Delta \\phi\\)"}) at the contact interface. Yet if you connect a voltmeter across this contact, the reading is exactly zero.
        </p>

        <p className="mb-6">
          Because a voltmeter does not read {"\\(\\phi\\)"}. It measures {"\\(-\\Delta \\tilde{\\mu}_{e^-}/F\\)"}—the difference in electrochemical potential of electrons between its terminals. At equilibrium, that driving force is gone ({"\\(\\Delta \\tilde{\\mu}_{e^-} = 0\\)"}). The reading is zero.
        </p>

        <p className="mb-6">
          A voltmeter measures the thermodynamic driving force for charge transport, not an electrostatic state of the material.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Why the \"Test-Charge\" Intuition Fails in Matter"}</h3>

        <p className="mb-6">
          In vacuum electrostatics, the electric potential is defined by measuring the force on a hypothetical, non-interacting test charge. Integrate that force, and you map {"\\(\\phi\\)"}.
        </p>

        <p className="mb-6">
          Inside condensed matter, this breaks down. A charged ion is not a point charge in vacuum. When it enters a liquid or solid phase, it experiences:
        </p>

        <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
          <li>
            <strong className="text-slate-900">Solvation/Hydration</strong>: The surrounding solvent molecules reorient, forming a tight shell that shields the charge.
          </li>
          <li>
            <strong className="text-slate-900">Specific Adsorption</strong>: Chemical affinity pulls the ion toward surfaces, regardless of the local electric field.
          </li>
          <li>
            <strong className="text-slate-900">Short-range Correlations</strong>: Finite-size effects, ion pairing, and dispersion forces dominate at molecular scales.
          </li>
        </ul>

        <p className="mb-6">
          The ion does not respond to {"\\(\\phi\\)"} alone. It responds to its entire chemical and physical environment. The &quot;potential of mean force&quot; driving it is a combination of chemistry and electrostatics that cannot be cleanly decoupled. Any attempt to define a potential drop across an interface—without accounting for these local chemical changes—is thermodynamically incomplete.
        </p>

        <p className="mb-6">
          This incompleteness does not disappear just because a model is convenient. Poisson–Boltzmann-type frameworks describe double layers by assuming ions distribute based on a local electrostatic potential. That works reasonably well in dilute solutions. But near an interface, or in concentrated electrolytes, non-electrostatic interactions dominate. If we force the framework anyway, we end up hiding those specific chemical interactions inside a modified {"\\(\\phi\\)"}—the double-layer potential appears to change, while what actually changes is the total electrochemical environment of the interface.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Battery Voltage as a Compressed Thermodynamic Message"}</h3>

        <p className="mb-6">
          The same logic extends to how we read a battery. A lithium-ion battery is not simply a device that stores electrical energy. It stores a chemical potential difference between its electrodes.
        </p>

        <p className="mb-6">
          The open-circuit voltage ({"\\(U\\)"}) is not a direct measure of the electrostatic potential of {"\\(\\text{Li}^+\\)"} ions. It reflects the chemical potential difference of neutral lithium ({"\\(\\text{Li}\\)"}) between anode and cathode:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-4 rounded-xl border border-slate-100">
          {"$$ U = -\\frac{\\mu_{\\text{Li}}^{\\text{cathode}} - \\mu_{\\text{Li}}^{\\text{anode}}}{F} $$"}
        </div>

        <p className="mb-6">
          The voltmeter reads a clean electrical signal, but that signal is a <span className="font-semibold text-[#A31F34] bg-[#A31F34]/5 px-1.5 py-0.5 rounded">compressed thermodynamic message</span>. It encodes electron transport in the wire, ion transport in the electrolyte, and chemical state changes in the intercalation electrodes—all at once.
        </p>

        <p className="mb-6">
          In intercalation materials, this is closely tied to <strong className="text-slate-900">chemical capacitance</strong>. As ions enter the host structure, they alter the material&apos;s chemical state, shifting the chemical potential landscape for the next insertion event. The voltage curve that results is a direct record of that shifting landscape—not a simple electrostatic buildup. This is the part I find scientifically beautiful.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"What the Principle Tells Us"}</h3>

        <p className="mb-6">
          The Gibbs–Guggenheim principle is not a constraint to limit our modeling. It is a guide to keep our physics honest.
        </p>

        <p className="mb-6">
          {"\\(\\phi\\)"} is a model variable—chosen by how we partition {"\\(\\tilde{\\mu}_i\\)"}, not handed to us by nature. The voltage we measure is always operational: a difference in electrochemical potential ({"\\(\\Delta \\tilde{\\mu}_{e^-}\\)"}), not a direct window into {"\\(\\phi\\)"}. Interfacial quantities like Galvani potentials are internal descriptions that require specific models to be meaningful. They are not independent thermodynamic observables.
        </p>

        <p className="mb-6">
          By keeping this distinction clear—between what is conceptual ({"\\(\\phi\\)"}) and what is operational ({"\\(V\\)"})—we avoid assigning physical reality to parameters that are artifacts of our chosen reference state.
        </p>

        <p className="mb-8">
          Nowhere is this distinction more critical—and more routinely overlooked—than when we step into the chemistry of protons. In the next post, I want to explore the thermodynamic reality of pH: is the proton activity we measure in the laboratory a true physical state, or a beautifully constructed convention?
        </p>

        {/* References Footer */}
        <hr className="my-16 border-t-2 border-slate-200" />

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 not-prose">
          <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">References</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-sm text-slate-600 leading-relaxed">
            <li>
              Pethica, B. A. &quot;Are electrostatic potentials between regions of different chemical composition measurable? The Gibbs–Guggenheim principle reconsidered, extended and its consequences revisited.&quot; <em>Physical Chemistry Chemical Physics</em> 9, 6253–6262 (2007).
            </li>
            <li>
              Huggins, R. A. <em>Advanced Batteries: Materials Science Aspects</em>. Springer (2009).
            </li>
          </ul>
        </div>

      </div>
    </article>
  );
}
