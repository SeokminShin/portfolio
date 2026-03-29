import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Seokmin Shin | Portfolio",
  description: "Personal Website and Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#FF6C0C]/20 selection:text-[#A31F34]">
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 hover:text-[#FF6C0C] transition-colors">
              Seokmin Shin
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="/" className="hover:text-[#FF6C0C] transition-colors">Home</Link>
              <Link href="/research" className="hover:text-[#FF6C0C] transition-colors">Research</Link>
              <Link href="/publications" className="hover:text-[#FF6C0C] transition-colors">Publications</Link>
            </nav>
            <button className="sm:hidden text-slate-900 p-2 hover:text-[#FF6C0C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </header>
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Seokmin Shin. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="mailto:email@example.com" className="hover:text-[#A31F34] transition-colors font-medium">Email</a>
              <a href="#" className="hover:text-[#A31F34] transition-colors font-medium">Google Scholar</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
