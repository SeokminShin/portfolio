import Link from 'next/link';
import Math from '@/components/Math';
import { getPost } from '@/data/posts';
import { postMetadata } from '@/lib/site';

export const metadata = postMetadata('kinetic-model-degeneracy');

/** Single source of truth for the badge, shared with the index cards. */
const post = getPost('kinetic-model-degeneracy');

export default function KineticModelDegeneracyPost() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3 text-sm font-bold text-[#FF6C0C] uppercase tracking-wider">
          <Link href="/posts" className="hover:text-[#A31F34] transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Blog
          </Link>
          <span className="text-slate-300">•</span>
          <span>{post.category}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium">September 15, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          The Curve We Cannot Read:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A31F34] to-[#FF6C0C]">
            On the Structural Indistinguishability of Interfacial Kinetics
          </span>
        </h1>
        <p className="text-lg text-slate-500 font-medium font-sans">
          Why Butler–Volmer, its resistance-corrected cousins, and Marcus–Hush–Chidsey/CIET kinetics all agree near equilibrium, diverge only where the data cannot yet be trusted, and what breaking that degeneracy would require.
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate prose-lg prose-a:no-underline max-w-none text-slate-700 leading-relaxed font-serif">

        {/* Intro Connection Box */}
        <div className="bg-[#A31F34]/5 border-l-[6px] border-[#A31F34] p-6 my-6 rounded-r-xl shadow-inner not-prose">
          <p className="m-0 font-medium text-slate-900 text-base leading-relaxed italic">
            &quot;At the end of my last essay I named the shape of the problem without doing the work: before we can decide whether Butler–Volmer or CIET is correct at high overpotential, we might first need our own Bates–Guggenheim moment, a convention that makes the measurement trustworthy rather than a better guess at the mechanism. I never said what makes the measurement untrustworthy in the first place. That is what this essay is for.&quot;
        </p>
        </div>

        <p className="mb-6">
          Plot current against overpotential for almost any electrode reaction and you get a shape that looks reassuringly familiar: flat near the origin, rising into a curve, eventually bending over into something like a plateau. Every kinetics textbook shows a version of this curve. The reassuring part is the problem.
        </p>

        <p className="mb-6">
          Let me put the claim precisely. Over the overpotential range a real cell gives us, several genuinely different hypotheses compete to describe the interface: symmetric Butler–Volmer, asymmetric Butler–Volmer, resistance-corrected (&quot;modified&quot;) Butler–Volmer, Marcus–Hush–Chidsey, and CIET. Their agreement runs deeper than a shared ability to fit the same data. To leading order, they are the same equation. The differences meant to distinguish them surface only in a regime where two unrelated artifacts produce the identical signature. Better instruments would not settle it; the obstruction is in the algebra.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          The Family We&apos;re Actually Choosing Among
        </h3>

        <p className="mb-6">
          It is easy to talk about &quot;BV versus CIET&quot; as if there were two candidates. What we are choosing among is a family, all of it built from the same move: assume a shape for the free-energy landscape of the elementary charge-transfer step, then read off a current from it.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-slate-700">
          <li><strong>Symmetric Butler–Volmer</strong>: a fixed 50/50 split of the driving force between the anodic and cathodic activation barriers.</li>
          <li><strong>Asymmetric Butler–Volmer</strong>: the same split, but at a fitted ratio <Math math="\alpha : (1-\alpha)" /> instead of <Math math="1/2 : 1/2" />.</li>
          <li><strong>Modified (resistance-corrected) Butler–Volmer</strong>: either of the above, with an assumed series resistance subtracted from the applied bias before fitting.</li>
          <li><strong>Marcus–Hush–Chidsey (MHC) / Gerischer</strong>: a parabolic free-energy landscape integrated over a continuum of electronic states, appropriate for a metal or, with a weighting density of states, a semiconducting oxide like NMC or LCO.</li>
          <li><strong>CIET</strong>: the MHC formalism extended so that the transferring electron and the inserting ion move together, still inheriting MHC&apos;s underlying activation picture.</li>
        </ul>

        <p className="mb-6">
          Every member of this family ends in the same place: a current–overpotential relation <Math math="i(\eta)" />. The question I want to answer is: how much of that function do we actually need to see before the family members stop agreeing with each other?
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          Where the Whole Family Agrees
        </h3>

        <p className="mb-6">
          Start with the general (asymmetric) Butler–Volmer equation, since it is the one member of the family we can expand by hand without special functions:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="i = i_0\left[\exp\!\left(\dfrac{\alpha F \eta}{RT}\right) - \exp\!\left(-\dfrac{(1-\alpha) F \eta}{RT}\right)\right]" block className="text-lg font-semibold text-slate-900" />
        </div>

        <p className="mb-6">
          Let <Math math="x \equiv F\eta / RT" />, so that <Math math="i/i_0 = e^{\alpha x} - e^{-(1-\alpha)x}" />. Expand each exponential to third order:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="e^{\alpha x} \approx 1 + \alpha x + \dfrac{(\alpha x)^2}{2} + \dfrac{(\alpha x)^3}{6}, \qquad e^{-(1-\alpha)x} \approx 1 - (1-\alpha)x + \dfrac{[(1-\alpha)x]^2}{2} - \dfrac{[(1-\alpha)x]^3}{6}" block className="text-base font-semibold text-slate-900" />
        </div>

        <p className="mb-6">
          Subtracting term by term, the constant &quot;1&quot;s cancel, the linear terms add (<Math math="\alpha x + (1-\alpha)x = x" />), and the quadratic terms combine as a difference of squares, <Math math="(\alpha x)^2 - [(1-\alpha)x]^2 = (2\alpha - 1)x^2" />. What survives is:
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="\dfrac{i}{i_0} = x + \dfrac{2\alpha - 1}{2}x^2 + O(x^3)" block className="text-xl font-semibold text-slate-900" />
        </div>

        <p className="mb-6">
          Look at where <Math math="\alpha" /> first enters: not in the leading term, only in the second-order one. To leading order,
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="i \approx i_0 x = \dfrac{F i_0}{RT}\,\eta \equiv \dfrac{\eta}{R_{ct}}, \qquad R_{ct} \equiv \dfrac{RT}{F i_0}" block className="text-xl font-semibold text-slate-900" />
        </div>

        <div className="bg-[#FF6C0C]/5 border-l-[6px] border-[#FF6C0C] p-8 my-8 rounded-r-xl shadow-inner not-prose">
          <p className="m-0 font-medium text-slate-900 text-lg leading-relaxed">
            <span className="font-bold text-[#FF6C0C] uppercase tracking-wider block text-xs mb-1 font-sans">Key Insight</span>
            The charge-transfer resistance <Math math="R_{ct}" /> that a small-signal EIS measurement returns carries no information about <Math math="\alpha" /> at all. The expansion never gave it a place to appear: the transfer coefficient — and with it the entire question of how asymmetric the barrier is — enters only at second order, buried under whatever double-layer charging, thermodynamic drift, and ordinary noise already crowd that regime.
        </p>
        </div>

        <p className="mb-6">
          The same conclusion holds, model for model, if the exponentials are replaced with the Marcus–Hush–Chidsey rate integral that CIET is built on. Expanded near equilibrium, the MHC current reduces to the identical linear form, <Math math="i \approx i_0 F\eta/RT" />, with an effective transfer coefficient of exactly <Math math="1/2" /> (Chidsey, 1991; Zeng et al., 2014). A fixed asymmetric split and a full Marcus parabola integrated over an electrode&apos;s density of states are, in this regime, the same number wearing two different derivations. Neither leaves a trace in the one quantity a linear <Math math="i\text{-}\eta" /> or small-amplitude EIS measurement can deliver.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          Where the Family Is Supposed to Split
        </h3>

        <p className="mb-6">
          The disagreement is real, but it only shows up far from equilibrium. Butler–Volmer has no ceiling: each exponential term grows without bound as <Math math="\eta" /> grows, so the current keeps climbing on a Tafel plot forever. Marcus theory behaves differently by construction. The activation energy for a single barrier is a parabola in the driving force,
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="\Delta G^{\ddagger}(\eta) = \dfrac{(\lambda - F\eta)^2}{4\lambda}" block className="text-xl font-semibold text-slate-900" />
        </div>

        <p className="mb-6">
          where <Math math="\lambda" /> is the reorganization energy. As <Math math="\eta" /> grows from zero, this barrier first shrinks, reproducing something that looks Tafel-like, until <Math math="F\eta = \lambda" />, where the reaction becomes barrierless. Push <Math math="\eta" /> past that point for an isolated molecular reaction and the barrier grows again: the famous Marcus inverted region, where the rate turns over and falls.
        </p>

        <p className="mb-6">
          An electrode does not behave this way, which is Chidsey&apos;s (1991) central point. A metal or a semiconducting oxide offers a whole continuum of electronic states, not one. Past the barrierless point, there is always some subset of states with the right energy to react without paying the inverted-region penalty, so the net current saturates instead of turning over. CIET inherits this saturating, S-shaped curve because it is built on the same MHC formalism. The one place the family is supposed to disagree with Butler–Volmer is exactly this large-<Math math="\eta" /> plateau, a feature set by <Math math="\lambda" />, and invisible to any EIS spectrum taken at low bias.
        </p>

        <div className="grid gap-6 my-8 not-prose">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#A31F34] transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold bg-[#A31F34]/10 text-[#A31F34] rounded-md font-sans uppercase">
                Unbounded family
              </span>
              <h4 className="font-bold text-xl text-slate-900 font-sans">Butler–Volmer, symmetric or asymmetric</h4>
            </div>
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              A fixed exponential in <Math math="\eta" />, with no built-in mechanism to stop climbing. Any bend in a real curve has to be explained by something added on top, usually transport or resistance.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#FF6C0C] transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold bg-[#FF6C0C]/10 text-[#FF6C0C] rounded-md font-sans uppercase">
                Saturating family
              </span>
              <h4 className="font-bold text-xl text-slate-900 font-sans">Marcus–Hush–Chidsey / Gerischer / CIET</h4>
            </div>
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Bends over on its own, intrinsically, once <Math math="F\eta" /> approaches <Math math="\lambda" />. The bend is a real prediction of the mechanism, not a correction applied afterward.
            </p>
          </div>
        </div>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          Two Impostors Wearing the Same Bend
        </h3>

        <p className="mb-6">
          A saturating curve is exactly what an intrinsic Marcus-type mechanism predicts. It is unfortunately also what two purely extrinsic effects predict, at similar current densities, in almost any real cell.
        </p>

        <p className="mb-6">
          The first is mass transport. As <Math math="\eta" /> grows, the reactant at the surface depletes, and the current approaches a diffusion-limited value that, for a film of thickness <Math math="L" />, scales roughly as
        </p>

        <div className="my-8 overflow-x-auto text-center bg-slate-50/50 py-5 rounded-xl border border-slate-200/80 shadow-sm font-sans">
          <Math math="i_{\text{lim}} \sim \dfrac{nFDc^{*}}{L}" block className="text-xl font-semibold text-slate-900" />
        </div>

        <p className="mb-6">
          This plateau has nothing to do with the reorganization energy. But taken alone, an <Math math="i\text{-}\eta" /> curve that flattens at high <Math math="\eta" /> cannot tell you whether it flattened because of <Math math="\lambda" /> or because of <Math math="L" />.
        </p>

        <p className="mb-6">
          The second is uncompensated resistance. Any series resistance between the reference point and the interface shifts the true local overpotential away from the applied one, <Math math="\eta_{\text{true}} = \eta_{\text{applied}} - iR_s" />. At high current, this steals back exactly the kind of curvature that would otherwise look like unbounded Tafel growth. This is precisely why &quot;modified Butler–Volmer&quot; schemes exist: fit <Math math="R_s" /> alongside <Math math="i_0" /> and <Math math="\alpha" />, and subtract its effect before reporting kinetics.
        </p>

        <p className="mb-6">
          I used to think of resistance correction as a fix, a way of cleaning the data before the real kinetic question gets asked. I don&apos;t think that anymore. Adding <Math math="R_s" /> as a free parameter does not remove the degeneracy between an intrinsic saturation and an artifact; it relocates it. A curve that bends over at high <Math math="\eta" /> can now be explained by <em>any</em> combination of a real <Math math="\lambda" />, a real diffusion length <Math math="L" />, and an assumed <Math math="R_s" /> that trades off against both. &quot;Modified BV&quot; sits inside this family alongside CIET — a third curve that bends like the others, for a reason of its own.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          Counting What We Can Actually Solve For
        </h3>

        <p className="mb-6">
          Put the pieces together and the problem is one of counting. A real, finite-range <Math math="i\text{-}\eta" /> curve, measured with real noise, realistically yields perhaps three independent features: an initial slope (<Math math="R_{ct}" />), the overpotential at which curvature becomes visible, and a limiting or asymptotic current. Any model in the family with three or more free parameters can be tuned to reproduce those three features from more than one underlying mechanism, and every model past plain symmetric BV clears that bar the moment you add <Math math="\alpha" />, or <Math math="\lambda" />, or <Math math="R_s" />, or <Math math="L" />. The map from &quot;which physical process is happening&quot; to &quot;what the curve looks like&quot; is not one-to-one. Fitting harder does not invert a map that isn&apos;t injective.
        </p>

        <p className="mb-6">
          I don&apos;t think this is a coincidence, and I don&apos;t think it is unique to kinetics. It is the same shape of problem I keep running into when people claim a DRT deconvolution has cleanly separated charge-transfer resistance from diffusion admittance in an impedance spectrum: an underdetermined inverse problem, dressed up differently depending on which domain (time, frequency, or overpotential) you happen to be squinting at. That comparison deserves its own essay. For now, the point is narrower: no amount of clever regression rescues an argument of the form &quot;the fit is good, therefore the mechanism is right,&quot; when several mechanisms are guaranteed to produce equally good fits by construction.
        </p>

        <hr className="my-10 border-t border-slate-200" />

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 font-sans">
          What Would Actually Break the Degeneracy
        </h3>

        <p className="mb-6">
          If the curve itself can&apos;t decide, the only way out is architectural: build an experiment where the competing explanations are forced to make different predictions about something other than the shape of one curve.
        </p>

        <p className="mb-6">
          The diffusion-versus-intrinsic-saturation confound has a clean handle, because the two depend on geometry differently. An intrinsic, <Math math="\lambda" />-controlled plateau does not care how thick the electrode is. A diffusion-limited plateau scales predictably with the transport length. Vary that length scale independently, rather than inferring it after the fact from the same curve you&apos;re trying to interpret, and the two hypotheses stop agreeing.
        </p>

        <p className="mb-6">
          The resistance-versus-intrinsic-saturation confound needs the same kind of move: a way of reading the true interfacial <Math math="\eta" /> directly, close enough to the reaction plane that <Math math="R_s" /> stops being a free parameter to fit around and becomes something the architecture pins down on its own. And underneath both sits the confound my last two essays were circling: none of this length-scale or resistance bookkeeping survives a reference potential that drifts as the reaction proceeds, which is exactly what an intercalation electrode&apos;s <Math math="U_{eq}(x)" /> does and a catalytic electrode&apos;s does not. That has to be settled first; the other two become answerable only once the baseline holds still.
        </p>

        <div className="bg-[#A31F34]/5 border-l-[6px] border-[#A31F34] p-8 my-10 rounded-r-xl shadow-inner not-prose">
          <p className="m-0 font-medium text-slate-900 text-lg leading-relaxed italic">
            &quot;A kinetic model doesn&apos;t earn credibility by fitting the accessible curve. It earns credibility by surviving an architecture built to make the other candidates fail differently. The real question was never which curve fits best; it&apos;s which architecture would even let the curves disagree.&quot;
        </p>
        </div>

        <p className="mb-6">
          Working out what such an architecture looks like for a lithium-intercalation electrode, and being honest this time about the assumptions it would quietly carry, is where I want to go next.
        </p>

        {/* References Section */}
        <div className="mt-16 pt-8 border-t border-slate-200 not-prose">
          <h4 className="text-lg font-bold text-slate-900 mb-4 font-sans flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 6H20"/></svg>
            References &amp; Key Literature
          </h4>
          <ol className="list-decimal list-inside text-sm text-slate-600 flex flex-col gap-2 font-sans">
            <li className="leading-relaxed">
              Marcus, R. A. &quot;On the Theory of Oxidation–Reduction Reactions Involving Electron Transfer. I.&quot; <em>J. Chem. Phys.</em> 24, 966–978 (1956).
            </li>
            <li className="leading-relaxed">
              Chidsey, C. E. D. &quot;Free Energy and Temperature Dependence of Electron Transfer at the Metal–Electrolyte Interface.&quot; <em>Science</em> 251, 919–922 (1991).
            </li>
            <li className="leading-relaxed">
              Zeng, Y., Smith, R. B., Bai, P. &amp; Bazant, M. Z. &quot;Simple Formula for Marcus–Hush–Chidsey Kinetics.&quot; <em>J. Electroanal. Chem.</em> 735, 77–83 (2014).
            </li>
            <li className="leading-relaxed">
              Zhang, Y. et al. &quot;Lithium-ion intercalation by coupled ion–electron transfer.&quot; <em>Science</em> 390, eadq2541 (2025).
            </li>
            <li className="leading-relaxed">
              Bai, P. &amp; Bazant, M. Z. &quot;Charge transfer kinetics at the solid–solid interface in porous electrodes.&quot; <em>Nat. Commun.</em> 5, 3585 (2014).
            </li>
            <li className="leading-relaxed">
              Bard, A. J. &amp; Faulkner, L. R. <em>Electrochemical Methods: Fundamentals and Applications</em>, 2nd ed. Wiley (2001).
            </li>
          </ol>
        </div>

      </div>
    </article>
  );
}
