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
              displayMath: [['$$', '$$'], ['\\\\[', \\\\]']]
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
            "Before diving into this essay, I would like to express my deepest gratitude to <span className="text-[#A31F34] font-bold not-italic">Professor Stephen Dongmin Kang</span>. To me, who merely assumed I "knew" electrochemistry, he taught the profound importance of "knowing precisely"—a lesson that inspired this writing."
          </p>
        </div>

        <p className="mb-6">
          Electrochemistry begins with a deceptively simple number.
        </p>

        <p className="mb-6">
          A voltmeter displays a voltage. A pH meter gives a relative potential reading. A battery has an open-circuit voltage. An electrochemical double layer exhibits a potential drop. A Pourbaix diagram is drawn on an axis labeled {"\\(E\\) vs pH"}.
        </p>

        <p className="mb-6">
          Because these numbers are so familiar, it is tempting to imagine that electrochemistry is, at its core, the science of measuring electrical potential differences inside matter (or between phases). We often think this way almost automatically: a voltage appears to be {"a direct electrical measurable quantity"}, and the role of thermodynamics is simply to explain why that voltage has a particular value.
        </p>

        <p className="mb-6">
          But the more we examine electrochemical thermodynamics, the less obvious this becomes.
        </p>

        <p className="mb-6">
          What does a voltmeter actually measure? What does an electrode potential actually refer to? When we say that a charged interface has a potential, are we describing a measurable physical object, or are we using a convenient theoretical language?
        </p>

        <p className="mb-6">
          This is where the Gibbs–Guggenheim principle becomes more than a historical warning. It acts as a discipline for our physical intuition.
        </p>

        <p className="mb-6">
          The principle, as originally emphasized by Gibbs and later made explicit by Guggenheim, states that the electrical potential difference between two regions of different chemical composition cannot be measured. A particularly sharp way to revisit this statement is to recognize that the problem is not that our instruments are insufficiently clever, but that the quantity itself is not thermodynamically separable as a measurable observable.
        </p>

        <p className="mb-6">
          At first, this sounds almost absurd. Electrochemists measure voltages every day. Batteries deliver voltages, reference electrodes define potentials, and potentiostats control them. Entire electrochemical methods are built around measuring and controlling these quantities.
        </p>

        <p className="mb-6">
          Thus, the principle cannot simply mean that voltage is unreal. Rather, it says something more subtle: <span className="font-semibold text-[#A31F34] bg-[#A31F34]/5 px-2 py-0.5 rounded">the measurable voltage is not the same thing as a pure electrical potential difference, {"\\(\\Delta \\phi\\)"}, between two chemically different regions.</span>
        </p>

        <p className="mb-6">
          This distinction is the conceptual doorway.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Voltage is Not Simply \\(\\Delta \\phi\\)"}</h3>

        <p className="mb-6">
          A useful starting point is a key concept I learned from my study under Professor Kang: that while electrochemistry often uses "potential" and "voltage" interchangeably, the measured voltage in an experiment corresponds to an electrochemical potential difference of electrons, not directly to an electrical potential difference.
        </p>

        <p className="mb-6">
          For a charged species {"\\(i\\)"}, the electrochemical potential is defined as:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-4 rounded-xl border border-slate-100">
          {"$$ \\tilde{\\mu}_i = \\mu_i + z_i F \\phi $$"}
        </div>

        <p className="mb-6">
          where {"\\(\\tilde{\\mu}_i\\)"} is the electrochemical potential, {"\\(\\mu_i\\)"} is the chemical potential, and {"\\(z_i F \\phi\\)"} is the electrical contribution.
        </p>

        <p className="mb-6">
          This equation is so familiar that it can become misleading. It appears to state that the total driving force naturally decomposes into a chemical term and an electrical term. But thermodynamically, we only have physical access to the total electrochemical potential, or differences in it. The partition into {"\\(\\mu_i\\)"} and {"\\(z_i F \\phi\\)"} is not, by itself, a direct measurement.
        </p>

        <p className="mb-6">
          The decomposition is useful, and the equation is mathematically sound, but usefulness is not the same as measurability.
        </p>

        <p className="mb-6">
          A classic metal–metal contact example makes this clear. Imagine two different metals initially isolated in a vacuum. Their electron energies (Fermi levels) may be different. When they are electrically connected, electrons redistribute until the electron electrochemical potential is equilibrated. In that process, an internal electrical potential difference develops between the metals. Yet, if we connect an ideal voltmeter between the two equilibrated metals, the measured voltage is zero.
        </p>

        <p className="mb-6">
          Why? Because the voltmeter does not measure the internal {"\\(\\Delta \\phi\\)"} as an isolated electrostatic quantity. It measures the remaining driving force for electrons ({"\\(-\\Delta \\tilde{\\mu}_{e^-}/F\\)"}). Once the electrons are equilibrated, that driving force is zero.
        </p>

        <p className="mb-6">
          This example breaks a common intuition. An electrical potential difference may be part of a model describing the system, but the measurable voltage is the electron electrochemical potential difference normalized by charge. A voltmeter does not insert a magical probe into matter to read out the scalar field {"\\(\\phi\\)"}. It asks a thermodynamic question: <em>is there a driving force for electrons to move through the external circuit?</em>
        </p>

        <p className="mb-6">
          That is a fundamentally different question.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"The Gibbs–Guggenheim Principle as a Boundary of Language"}</h3>

        <p className="mb-6">
          This distinction can be given a broader thermodynamic form. The Gibbs–Guggenheim principle dictates that we cannot measure the electrostatic potential difference between two regions of different chemical composition. This applies to many quantities that electrochemists routinely discuss: Galvani potential differences, inner potentials, liquid junction potentials interpreted as pure electrostatic drops, or interfacial potential differences between an electrode and an electrolyte.
        </p>

        <p className="mb-6">
          The key issue is not whether electrostatic potential can be defined mathematically. In electrostatics, one can readily define a scalar potential from an electric field. But real electrochemical systems are not made of a hypothetical continuous electrical fluid. They are made of electrons, ions, solvents, surfaces, dipoles, defects, adsorbates, and chemical interactions. Their equilibrium is thermodynamic, not purely static or electrostatic.
        </p>

        <p className="mb-6">
          This is why the test-charge intuition from vacuum electrostatics fails inside condensed matter. In a vacuum, if the only force on a charge is electrostatic, mapping the force gives the electric field, and integrating the field yields the potential. But in an electrolyte, a charged ion does not move solely because of a macroscopic electrical field. It experiences solvation, finite-size effects, ion pairing, dispersion interactions, local structure, surface affinity, entropic constraints, and chemical specificity.
        </p>

        <p className="mb-6">
          The ion does not ask: <em>{"\"What is \\(\\phi\\) here?\""}</em> It responds to its total electrochemical environment.
        </p>

        <p className="mb-6">
          We can measure total thermodynamic driving forces, but we cannot, in general, separate those driving forces into a purely electrostatic part and a purely non-electrostatic chemical part by measurement alone. If we consider a charged species transferred between two chemically different regions, the total work of transfer is meaningful. But if we could measure the non-electrostatic part separately, we could subtract it from the total transfer work and obtain the electrostatic potential difference. That would violate the Gibbs–Guggenheim principle. Therefore, the decomposition itself cannot be a thermodynamically independent measurement.
        </p>

        <p className="mb-6">
          The total is measurable. The decomposition is model-dependent.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Why This Matters for Electrochemical Models"}</h3>

        <p className="mb-6">
          This does not mean that {"\\(\\phi\\)"} is useless. Quite the opposite. The electrical potential is a powerful conceptual tool. We introduce {"\\(\\phi\\)"} because it allows us to use electrostatic reasoning, especially for long-range interactions. Once {"\\(\\phi\\)"} is introduced, we can connect charge density to potential through Poisson’s equation, describe space charge regions, model double layers, and interpret the redistribution of charged species.
        </p>

        <p className="mb-6">
          Without such a variable, many electrochemical and materials problems would become almost impossible to formulate. The danger begins only when the conceptual tool is mistaken for a directly measured quantity.
        </p>

        <p className="mb-6">
          This critique becomes particularly important when we examine Poisson–Boltzmann-type thinking. The Poisson–Boltzmann equation describes ionic distributions by combining Poisson’s equation with a Boltzmann distribution. In its simplest form, the ion distribution is governed by the local mean electrostatic potential. This can be a reasonable approximation in dilute electrolytes and at small potentials, where non-electrostatic contributions are relatively simple and the linearized limit is appropriate. But outside those limits, especially near interfaces or in concentrated solutions, the approximation becomes thermodynamically fragile.
        </p>

        <p className="mb-6">
          The reason is conceptual, not merely mathematical. Near an interface, the chemical environment is not the same as in the bulk. The ion may interact with the surface, its hydration structure may change, and its dispersion interaction with the adjacent phase may become dominant. Under these conditions, treating the ion distribution as if it were determined solely by a smoothed-out electrostatic potential can hide the chemical part of the problem inside a quantity that is then called "potential."
        </p>

        <p className="mb-6">
          We say: <em>the potential attracts the ion.</em> But perhaps the ion is responding to solvation, adsorption, ion correlation, surface chemistry, and electrostatic interactions all at once.
        </p>

        <p className="mb-6">
          We say: <em>the double-layer potential changes.</em> But perhaps what changes is a total potential of mean force, which we then compress into an electrostatic-looking parameter.
        </p>

        <p className="mb-6">
          We say: <em>the electrode potential controls the reaction.</em> But perhaps the measured control variable is the electron electrochemical potential, while the interfacial Galvani potential drop remains a model-dependent internal description.
        </p>

        <p className="mb-6">
          This does not make the language wrong. It makes the language conditional.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"Battery Voltage as a Compressed Thermodynamic Message"}</h3>

        <p className="mb-6">
          This perspective also changes how we think about batteries. A battery is often described as storing electrical energy. Electrochemical systems are better understood as devices that convert between chemical and electrical forms of energy, rather than as systems containing a special category called "electrochemical energy."
        </p>

        <p className="mb-6">
          This concept becomes clearer when we look at the origin of a battery's electromotive force. The emf of a battery does not originate from a pure electrical potential difference. It originates from non-electrostatic sources, especially chemical potential differences of neutral species. For a lithium cell, the open-circuit voltage can be written in terms of the chemical potential difference of neutral lithium in the two electrode environments, rather than as a direct measurement of the electrical potential of {"\\(\\text{Li}^+\\)"}.
        </p>

        <p className="mb-6">
          A battery is not simply a container of separated electrical potential; it is a thermodynamic transducer. It converts a chemical potential difference into an electron electrochemical potential difference that an external circuit reads as voltage.
        </p>

        <p className="mb-6">
          This connects naturally to the concept of chemical capacitance. In intercalation materials, the product of the electrochemical reaction stays inside the host. Every charge-transfer event changes the state of the material, and that state change shifts the chemical potential landscape for the next event. In that sense, battery voltage is not just an electrical number. It is a <span className="font-semibold text-[#A31F34] bg-[#A31F34]/5 px-1.5 py-0.5 rounded">compressed thermodynamic message</span> from the material.
        </p>

        <p className="mb-6">
          The Gibbs–Guggenheim principle helps refine this statement. The voltage is not a direct reading of {"\\(\\Delta \\phi\\)"}. It is the experimentally accessible shadow of a full thermodynamic circuit. Electrons in the external wire, ions in the electrolyte, neutral species in the electrodes, reference conventions, interfacial equilibria, and chemical potentials all participate in making the measured number possible. The voltmeter gives a clean number, but the meaning of that number is not clean unless we specify the thermodynamic path by which it is read.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">{"What the Principle Does, and Does Not, Say"}</h3>

        <p className="mb-6">
          We should not read the Gibbs–Guggenheim principle as a command to stop using electrical potentials. That would be impossible and unhelpful. Electrostatic potentials, Galvani potentials, double-layer potentials, and space-charge potentials are indispensable modeling tools. They organize our thinking, allow us to write equations, and connect microscopic charge distributions to macroscopic observables.
        </p>

        <p className="mb-6">
          The principle says something more disciplined: <span className="font-semibold text-slate-900 border-b-2 border-[#FF6C0C]/40 pb-0.5">Use {"\\(\\phi\\)"}, but do not forget what kind of object it is.</span>
        </p>

        <p className="mb-6">
          It is not, in general, a directly measurable thermodynamic observable between chemically different regions. It is a model variable introduced by choosing how to partition the total electrochemical potential into an electrical part and a non-electrical part.
        </p>

        <p className="mb-6">
          This distinction affects how we interpret double-layer models, how we assign liquid junction potentials, how we discuss single-ion activities, how we understand reference electrodes, how we read pH-dependent electrode potentials, and how we teach the Nernst equation. Most importantly, it affects how we decide what has actually been measured.
        </p>

        <p className="mb-6">
          In electrochemistry, many of the quantities that look most direct are actually compressed quantities. Voltage, overpotential, pH, exchange current density, chemical capacitance, and even reaction rate can contain hidden assumptions about what has been separated from what.
        </p>

        <p className="mb-6">
          The scientific challenge is not only to obtain a number. It is to understand what conceptual operation was required for that number to become meaningful.
        </p>

        <p className="mb-6">
          This makes the Gibbs–Guggenheim principle not a constraint, but a foundational guide for our physical models. It demands that we distinguish between what is conceptual and what is operational. 
        </p>

        <p className="mb-8">
          And perhaps nowhere is this distinction more critical—and more routinely overlooked—than when we step into the realm of pH. In the next post, I will explore the thermodynamic reality of pH: is the proton activity we measure in the lab a true physical state, or is it a beautifully standardized convention?
        </p>

        {/* References Footer */}
        <hr className="my-16 border-t-2 border-slate-200" />
        
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 not-prose">
          <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">References</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-sm text-slate-600 leading-relaxed">
            <li>
              Pethica, B. A. "Are electrostatic potentials between regions of different chemical composition measurable? The Gibbs–Guggenheim principle reconsidered, extended and its consequences revisited." <em>Physical Chemistry Chemical Physics</em> 9, 6253–6262 (2007).
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
