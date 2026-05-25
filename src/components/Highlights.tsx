import React from 'react';

export const Highlights: React.FC = () => {
  return (
    <section className="border-t border-b border-line bg-[#fafafa] p-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 max-w-[1240px] mx-auto">
        <div className="py-8 px-[clamp(20px,4vw,56px)] flex items-center gap-4.5 border-b border-line lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0">
          <div className="w-12 h-12 rounded-xl bg-ink text-pink flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="text-left">
            <b className="text-[22px] font-extrabold block tracking-tight leading-[1.1]">+10 anos</b>
            <span className="text-[#555] text-sm block mt-0.5">de mercado e operação fabril</span>
          </div>
        </div>
        <div className="py-8 px-[clamp(20px,4vw,56px)] flex items-center gap-4.5 border-b border-line lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0">
          <div className="w-12 h-12 rounded-xl bg-ink text-pink flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8 6 8 10 12 14c4-4 4-8 0-12z"/>
              <path d="M2 22c4-4 8-4 10 0 2-4 6-4 10 0"/>
            </svg>
          </div>
          <div className="text-left">
            <b className="text-[22px] font-extrabold block tracking-tight leading-[1.1]">Atendemos todo o Brasil</b>
            <span className="text-[#555] text-sm block mt-0.5">logística e suporte regional</span>
          </div>
        </div>
        <div className="py-8 px-[clamp(20px,4vw,56px)] flex items-center gap-4.5 border-b-0 last:border-b-0">
          <div className="w-12 h-12 rounded-xl bg-ink text-pink flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h18l-2 13H5L3 7z"/>
              <path d="M8 7V5a4 4 0 0 1 8 0v2"/>
            </svg>
          </div>
          <div className="text-left">
            <b className="text-[22px] font-extrabold block tracking-tight leading-[1.1]">+200 marcas</b>
            <span className="text-[#555] text-sm block mt-0.5">lançadas e desenvolvidas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
