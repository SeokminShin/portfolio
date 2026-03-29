import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-between gap-12 sm:flex-row">
        <div className="flex flex-col gap-6 sm:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Stephen Dongmin Kang
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed md:text-xl">
            I am a researcher and faculty member in Materials Science. My work focuses on the fundamentals of electronic and ionic transport, utilizing advanced characterization techniques to build a better understanding of novel materials.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link 
              href="/research" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Explore Research
            </Link>
            <Link 
              href="/publications" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
            >
              View Publications
            </Link>
          </div>
        </div>
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-64 sm:w-64">
           {/* Placeholder for Profile Picture */}
           <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </div>
        </div>
      </section>

      {/* Highlights / News Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2">Recent Highlights</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Probing the Depths of Battery Heterogeneity",
              date: "Mar 2026",
              description: "New insights into how battery degradation occurs at the microscopic level.",
            },
            {
              title: "To Start at Seoul National University as Faculty",
              date: "Feb 2026",
              description: "Excited to share that I will be joining SNU MSE as an Assistant Professor.",
            },
            {
              title: "Contact resistance: important in battery electrodes!",
              date: "Jan 2026",
              description: "Published our new findings on contact resistance limits in modern electrodes.",
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 cursor-pointer">
              <p className="text-xs font-medium text-blue-600 mb-2">{item.date}</p>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
