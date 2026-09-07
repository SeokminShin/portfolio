'use client';

import { useEffect, useState } from 'react';

const CV_PATH = '/portfolio/CV_Seokmin_Shin.pdf';

export default function CVModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close on Escape so the modal is reachable without a mouse.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        className="inline-flex h-11 items-center justify-center rounded-md bg-slate-100 text-slate-800 px-6 text-sm font-bold shadow-sm transition-all hover:bg-slate-200 hover:text-slate-900 border border-slate-200 hover:-translate-y-0.5"
      >
        📥 Preview CV
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae preview"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-5xl h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="bg-[#A31F34] text-white p-2 rounded-lg font-bold text-xs">PDF</span>
                <h3 className="font-bold text-slate-900">Curriculum Vitae - Seokmin Shin</h3>
              </div>
              <div className="flex items-center gap-4">
                <a href={CV_PATH} download className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-bold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close CV preview"
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>
            {/* PDF Viewer */}
            <div className="flex-1 bg-slate-100 p-2 sm:p-6 overflow-auto">
              <iframe
                src={`${CV_PATH}#toolbar=0`}
                className="w-full h-full rounded-md shadow-inner border border-slate-300 bg-white"
                title="CV Preview"
              />
            </div>
            {/* Modal Footer (Mobile Download) */}
            <div className="sm:hidden p-4 border-t border-slate-200 bg-white">
              <a href={CV_PATH} download className="flex items-center justify-center gap-2 w-full py-3 bg-[#A31F34] text-white rounded-xl font-bold">
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
