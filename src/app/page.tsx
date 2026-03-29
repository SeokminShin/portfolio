import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-between gap-12 sm:flex-row">
        <div className="flex flex-col gap-6 sm:w-[65%] text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#A31F34] to-[#FF6C0C] sm:text-5xl py-1 pb-2">
            Seokmin Shin
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed md:text-xl">
            My research interests lie in understanding the fundamental driving forces behind complex electrochemical phenomena. I aim to bridge macroscopic experimental observations with exact physicochemical frameworks. Guided by rigorous thermodynamic derivations, I strive to decipher complex interfacial charge transport, chemical capacitance, and hidden kinetic behaviors across various electrochemical processes.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <Link 
              href="/research" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#A31F34] px-6 text-sm font-medium text-white shadow-md transition-all hover:bg-[#85192A] hover:-translate-y-0.5"
            >
              Explore Research
            </Link>
            <Link 
              href="/publications" 
              className="inline-flex h-11 items-center justify-center rounded-md border-2 border-slate-200 bg-white px-6 text-sm font-medium shadow-sm transition-all hover:border-[#FF6C0C] hover:text-[#FF6C0C] hover:-translate-y-0.5"
            >
              View Publications
            </Link>
            <a 
              href="/CV_SeokminShin.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-100 text-slate-800 px-6 text-sm font-bold shadow-sm transition-all hover:bg-slate-200 hover:text-slate-900 border border-slate-200 hover:-translate-y-0.5"
            >
              📥 View CV
            </a>
          </div>
        </div>
        <div className="sm:w-[35%] flex justify-center sm:justify-end">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-xl sm:h-56 sm:w-56 transform transition duration-500 hover:scale-105 hover:rotate-1">
             <Image src="/Seokmin.jpg" alt="Seokmin Shin Profile Picture" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="flex flex-col gap-6 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b-2 border-slate-100 pb-2">Key Milestones & Topics</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              tag: "Previous Research",
              title: "Fitting Specific Reaction Intermediates",
              date: "UNIST (~2024)",
              description: "Overcame linear scaling relationships (LSRs) via atomic-scale spacing and self-tandem active sites to drive complex multi-reactant electrocatalysis.",
            },
            {
              tag: "Presentation",
              title: "Gordon Research Conference",
              date: "Jan 2024",
              description: "Presented research on electrochemical C-N bond formation from Carbon Dioxide and Nitrogen Oxygenates.",
            },
            {
              tag: "Award",
              title: "Samsung Human-Tech Award",
              date: "Spring 2024",
              description: "Received paper awards from Samsung Advanced Institute of Technology for outstanding research.",
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#FF6C0C] cursor-pointer">
              <div className="flex justify-between items-start gap-2 mb-3">
                <span className="inline-flex px-2.5 py-1 text-[10px] leading-tight font-extrabold uppercase tracking-wider text-[#A31F34] bg-[#A31F34]/10 rounded-md text-left">
                  {item.tag}
                </span>
                <span className="text-[11px] font-bold text-slate-500 shrink-0 mt-0.5">
                  {item.date}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#FF6C0C] transition-colors mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coco Section */}
      <section className="flex flex-col items-center gap-6 pt-12 pb-8 border-t-2 border-dashed border-slate-200 mt-8">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-[#FF6C0C]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5C13.4 6.5 14.5 5.4 14.5 4S13.4 1.5 12 1.5 9.5 2.6 9.5 4 10.6 6.5 12 6.5ZM19 7C20.4 7 21.5 5.9 21.5 4.5S20.4 2 19 2 16.5 3.1 16.5 4.5 17.6 7 19 7ZM5 7C6.4 7 7.5 5.9 7.5 4.5S6.4 2 5 2 2.5 3.1 2.5 4.5 3.6 7 5 7ZM19 8.5C17.6 8.5 16.5 9.6 16.5 11S17.6 13.5 19 13.5 21.5 12.4 21.5 11 20.4 8.5 19 8.5ZM5 8.5C3.6 8.5 2.5 9.6 2.5 11S3.6 13.5 5 13.5 7.5 12.4 7.5 11 6.4 8.5 5 8.5ZM12 8C9.5 8 7 9.5 7 13.5C7 17.5 9.5 22 12 22S17 17.5 17 13.5C17 9.5 14.5 8 12 8Z"/></svg>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Meet Coco!</h2>
          <svg className="w-8 h-8 text-[#FF6C0C]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5C13.4 6.5 14.5 5.4 14.5 4S13.4 1.5 12 1.5 9.5 2.6 9.5 4 10.6 6.5 12 6.5ZM19 7C20.4 7 21.5 5.9 21.5 4.5S20.4 2 19 2 16.5 3.1 16.5 4.5 17.6 7 19 7ZM5 7C6.4 7 7.5 5.9 7.5 4.5S6.4 2 5 2 2.5 3.1 2.5 4.5 3.6 7 5 7ZM19 8.5C17.6 8.5 16.5 9.6 16.5 11S17.6 13.5 19 13.5 21.5 12.4 21.5 11 20.4 8.5 19 8.5ZM5 8.5C3.6 8.5 2.5 9.6 2.5 11S3.6 13.5 5 13.5 7.5 12.4 7.5 11 6.4 8.5 5 8.5ZM12 8C9.5 8 7 9.5 7 13.5C7 17.5 9.5 22 12 22S17 17.5 17 13.5C17 9.5 14.5 8 12 8Z"/></svg>
        </div>
        <p className="text-center text-slate-600 max-w-lg">
          My deeply beloved puppy, <strong>Coco</strong>, who acts as my Principal Paw-vestigator and provides endless emotional support during long hours of research.
        </p>
        <Link href="/coco" className="relative overflow-hidden w-48 h-48 rounded-full border-[6px] border-[#FF6C0C]/30 flex flex-col items-center justify-end bg-slate-100 shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-3 cursor-pointer group pb-4">
          <img src="/coco/main.jpg" alt="Coco" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" />
          <span className="relative z-10 text-xs font-bold flex flex-col items-center gap-1 group-hover:text-[#FF6C0C] bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-md transition-colors text-slate-900 shadow-sm border border-white/20">
            🐶 View Gallery
          </span>
        </Link>
      </section>

    </div>
  );
}
