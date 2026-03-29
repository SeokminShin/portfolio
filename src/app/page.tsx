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
            I am an electrochemist and researcher. My work focuses on mechanistic electrocatalysis, utilizing quantum mechanical frameworks, PCET theories, and advanced operando characterizations to understand and build better energy systems.
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

      {/* Highlights / News Section */}
      <section className="flex flex-col gap-6 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b-2 border-slate-100 pb-2">Experience Highlights</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Electrochemical Co-reduction",
              date: "2023 - 2024",
              description: "Understanding catalytic mechanisms under competing reactants and developing catalysts for CO2/nitrate co-reduction to urea.",
            },
            {
              title: "Gordon Research Conference",
              date: "Jan 2024",
              description: "Presented research on electrochemical C-N bond formation from Carbon Dioxide and Nitrogen Oxygenates.",
            },
            {
              title: "Samsung Human-Tech Award",
              date: "Spring 2024",
              description: "Received paper awards from Samsung Advanced Institute of Technology for outstanding research.",
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#FF6C0C] cursor-pointer">
              <p className="text-xs font-bold text-[#A31F34] mb-2">{item.date}</p>
              <h3 className="font-semibold text-slate-900 group-hover:text-[#FF6C0C] transition-colors mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
