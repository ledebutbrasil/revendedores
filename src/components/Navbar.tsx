import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/92 backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-between h-[72px]">
        <div className="flex items-center">
          <img 
            src="/logo_ledebut.svg" 
            alt="Ledebut Logo" 
            className="h-[22px] md:h-[26px] w-auto" 
          />
        </div>
        <a 
          href="#form" 
          className="inline-flex items-center gap-2.5 bg-ink text-white px-[18px] py-3 rounded-full font-semibold text-sm transition-all hover:bg-pink duration-200"
        >
          <span className="max-sm:hidden">Quero ser parceiro</span>
          <span className="sm:hidden">Ser parceiro</span>
          <svg 
            className="w-3.5 h-3.5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </header>
  );
};
