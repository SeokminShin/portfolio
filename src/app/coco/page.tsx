import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PawIcon from '@/components/PawIcon';

export const metadata: Metadata = {
  title: "Coco's Gallery",
  description:
    "A photo archive of Coco, Principal Paw-vestigator and the true mastermind behind all great electrochemical properties.",
  openGraph: {
    type: 'website',
    title: "Coco's Gallery",
    description: "A photo archive of Coco, Principal Paw-vestigator.",
    url: '/coco',
    images: [{ url: '/portfolio/coco/main.jpg', alt: 'Coco' }],
  },
};

const photos = [
  { src: "/portfolio/coco/1.jpg", title: "Sleeping on duty" },
  { src: "/portfolio/coco/2.jpg", title: "Reviewing thermodynamic derivations" },
  { src: "/portfolio/coco/3.jpg", title: "Barking at non-ideal behavior" },
  { src: "/portfolio/coco/4.jpg", title: "Playtime during cyclic voltammetry" },
  { src: "/portfolio/coco/5.jpg", title: "Morning walk" },
  { src: "/portfolio/coco/6.jpg", title: "Evaluating battery cyclic data" },
];

export default function CocoGallery() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="flex flex-col items-center gap-4 text-center border-b-2 border-[#FF6C0C]/20 pb-8">
        <div className="flex gap-2 mb-2 text-[#FF6C0C]">
          <PawIcon className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">Coco's Gallery 🐾</h1>
        <p className="max-w-2xl text-lg text-slate-600 mt-2">
          The official archive of Coco's cutest moments. Principal Paw-vestigator, stress reliever, and the true mastermind behind all great electrochemical properties.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {photos.map((photo, i) => (
          <figure key={i} className="relative aspect-square bg-slate-100 rounded-2xl border-2 border-slate-200 flex flex-col items-center justify-end group hover:border-[#FF6C0C]/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden pb-4 px-3 m-0">
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain z-0 group-hover:scale-105 transition-transform duration-700"
            />

            <figcaption className="relative z-10 w-full flex flex-col items-center justify-center p-3 bg-white/30 backdrop-blur-md rounded-xl opacity-90 group-hover:opacity-100 group-hover:bg-white/60 transition-all duration-300 text-center shadow-sm border border-white/20">
              <span className="text-sm font-bold text-slate-900 drop-shadow-sm">{photo.title}</span>
            </figcaption>
          </figure>
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
