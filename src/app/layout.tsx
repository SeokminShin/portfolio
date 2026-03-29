import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seokmin Shin | Electrochemist",
  description: "Portfolio and research highlights of Seokmin Shin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`}>
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900 group">
              S<span className="text-[#A31F34] transition-colors group-hover:text-[#FF6C0C]">.</span> Shin
            </Link>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="transition-colors hover:text-slate-900">Home</Link>
              <Link href="/research" className="transition-colors hover:text-slate-900">Research</Link>
              <Link href="/publications" className="transition-colors hover:text-slate-900">Publications</Link>
              <Link href="/posts" className="transition-colors hover:text-[#FF6C0C]">Blog</Link>
            </div>
          </div>
        </nav>
        
        <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500 flex flex-col items-center gap-2">
          <p>© {new Date().getFullYear()} Seokmin Shin. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
