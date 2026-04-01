import Link from 'next/link';

export default function CocoGallery() {
  const photos = [
    { src: "/coco/1.jpg", title: "Sleeping on duty" },
    { src: "/coco/2.jpg", title: "Reviewing thermodynamic derivations" },
    { src: "/coco/3.jpg", title: "Barking at non-ideal behavior" },
    { src: "/coco/4.jpg", title: "Playtime during cyclic voltammetry" },
    { src: "/coco/5.jpg", title: "Morning walk" },
    { src: "/coco/6.jpg", title: "Evaluating battery cyclic data" },
  ];

  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="flex flex-col items-center gap-4 text-center border-b-2 border-[#FF6C0C]/20 pb-8">
        <div className="flex gap-2 mb-2 text-[#FF6C0C]">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5C13.4 6.5 14.5 5.4 14.5 4S13.4 1.5 12 1.5 9.5 2.6 9.5 4 10.6 6.5 12 6.5ZM19 7C20.4 7 21.5 5.9 21.5 4.5S20.4 2 19 2 16.5 3.1 16.5 4.5 17.6 7 19 7ZM5 7C6.4 7 7.5 5.9 7.5 4.5S6.4 2 5 2 2.5 3.1 2.5 4.5 3.6 7 5 7ZM19 8.5C17.6 8.5 16.5 9.6 16.5 11S17.6 13.5 19 13.5 21.5 12.4 21.5 11 20.4 8.5 19 8.5ZM5 8.5C3.6 8.5 2.5 9.6 2.5 11S3.6 13.5 5 13.5 7.5 12.4 7.5 11 6.4 8.5 5 8.5ZM12 8C9.5 8 7 9.5 7 13.5C7 17.5 9.5 22 12 22S17 17.5 17 13.5C17 9.5 14.5 8 12 8Z"/></svg>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">Coco's Gallery 🐾</h1>
        <p className="max-w-2xl text-lg text-slate-600 mt-2">
          The official archive of Coco's cutest moments. Principal Paw-vestigator, stress reliever, and the true mastermind behind all great electrochemical properties.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {photos.map((photo, i) => (
          <div key={i} className="relative aspect-square bg-slate-100 rounded-2xl border-2 border-slate-200 flex flex-col items-center justify-end group hover:border-[#FF6C0C]/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer overflow-hidden pb-4 px-3">
            <img src={photo.src} alt={photo.title} className="absolute inset-0 w-full h-full object-contain z-0 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center p-3 bg-white/30 backdrop-blur-md rounded-xl opacity-90 group-hover:opacity-100 group-hover:bg-white/60 transition-all duration-300 text-center shadow-sm border border-white/20">
              <span className="text-sm font-bold text-slate-900 drop-shadow-sm">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/" className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-[#FF6C0C] hover:text-white transition-colors duration-300 hover:scale-105 transform">
          &larr; Return to Home
        </Link>
      </div>
    </div>
  );
}
