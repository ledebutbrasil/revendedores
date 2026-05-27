import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/92 backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-center h-[60px]">
        <div className="flex items-center">
          <img 
            src="/logo_ledebut.svg" 
            alt="Ledebut Logo" 
            className="h-[16px] md:h-[20px] w-auto" 
          />
        </div>
      </div>
    </header>
  );
};
