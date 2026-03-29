import Link from 'next/link';

export default function AcademicTransitionPost() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-10 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3 text-sm font-bold text-[#FF6C0C] uppercase tracking-wider">
          <Link href="/research" className="hover:text-[#A31F34] transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Research
          </Link>
          <span className="text-slate-300">•</span>
          <span>Academic Essay</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          The Turning Point:<br/> From Catalysis to Solid-State Thermodynamics
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Reflections on the limitations of macroscopic screening and my deliberate pivot towards fundamental electrochemical frameworks.
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-serif">
        
        <p className="mb-6">
          My early doctoral journey at UNIST was profoundly fulfilling. Immersed in the field of electrocatalysis, I developed efficient organic and inorganic hybrid systems, published multiple peer-reviewed papers, and presented my findings at prominent scientific conferences. My energy was focused on macroscopic kinetic outcomes—optimizing reaction pathways and manipulating binding energies to circumvent Linear Scaling Relationships (LSRs).
        </p>

        <p className="mb-6">
          However, as my research progressed, so did my relentless curiosity regarding the <em className="text-[#A31F34] font-semibold">actual</em> driving forces occurring at the microscopic interfaces between solid conductors and complex electrolytes.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The 2024 Gordon Research Conference</h3>
        <p className="mb-6">
          The true catalyst for my academic transition occurred during the <strong>2024 Gordon Research Conference (GRC) on Electrochemistry</strong>. Interacting with frontier research and elite minds, I was exposed to the stark limitations of conventional models. I realized that merely evaluating half-cell reactions or reporting catalytic trends was insufficient; the real bottlenecks in modern energy conversion devices lie in the complex realities of <strong>mixed ionic-electronic conductors (MIECs)</strong>, microscopic phase separation, and the thermodynamic origins of charge transport.
        </p>

        <p className="mb-6">
          Coupled with pivotal personal experiences that offered me unique moments of intense introspection, I decided to aggressively shift my academic trajectory. I stopped being satisfied with simply engineering a better catalyst and instead sought the mathematical and thermodynamic truths behind <em>why</em> phenomena like non-ideal ambipolar diffusion, contact resistance limitations, and structural phase changes occur beyond dilute limits.
        </p>

        <div className="bg-[#A31F34]/5 border-l-[6px] border-[#A31F34] p-8 my-10 rounded-r-xl shadow-inner">
          <p className="m-0 font-medium text-slate-900 text-xl italic">
            "I am no longer simply seeking to build a better electrode; I am seeking to strictly decipher the fundamental thermodynamic and solid-state physical rules that govern it."
          </p>
        </div>

        {/* User's Sandbox / Ongoing Thoughts */}
        <hr className="my-16 border-t-2 border-slate-200" />
        
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Ongoing Reflections
          </h2>
          <p className="text-slate-500 mb-6 text-sm font-sans">
            This section serves as my continuous research diary. As I dive deeper into solid-state ionics, defect thermodynamics, and ambipolar diffusion texts, I will update my hypotheses here.
          </p>

          <div className="bg-white border border-dashed border-slate-300 rounded-xl p-6 text-sm font-sans text-slate-500">
            <p><em>[Draft section - Write your ongoing ideas here: e.g., Notes on applying Huggins' principles to your latest data, or reflections on electrochemical vs electrical potential differences...]</em></p>
          </div>
        </div>

      </div>
    </article>
  );
}
