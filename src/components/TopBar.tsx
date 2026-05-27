import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-ink text-white py-2 overflow-hidden whitespace-nowrap relative z-40 text-[11px] sm:text-xs font-semibold uppercase tracking-widest select-none border-b border-white/5">
      <div className="flex animate-marquee">
        <div className="flex shrink-0 gap-8 px-4 items-center">
          <span>+10 anos no mercado</span>
          <span className="text-pink">•</span>
          <span>Atendemos em todo o Brasil</span>
          <span className="text-pink">•</span>
          <span>+200 marcas lançadas e desenvolvidas</span>
          <span className="text-pink">•</span>
        </div>
        <div className="flex shrink-0 gap-8 px-4 items-center" aria-hidden="true">
          <span>+10 anos no mercado</span>
          <span className="text-pink">•</span>
          <span>Atendemos em todo o Brasil</span>
          <span className="text-pink">•</span>
          <span>+200 marcas lançadas e desenvolvidas</span>
          <span className="text-pink">•</span>
        </div>
        <div className="flex shrink-0 gap-8 px-4 items-center" aria-hidden="true">
          <span>+10 anos no mercado</span>
          <span className="text-pink">•</span>
          <span>Atendemos em todo o Brasil</span>
          <span className="text-pink">•</span>
          <span>+200 marcas lançadas e desenvolvidas</span>
          <span className="text-pink">•</span>
        </div>
        <div className="flex shrink-0 gap-8 px-4 items-center" aria-hidden="true">
          <span>+10 anos no mercado</span>
          <span className="text-pink">•</span>
          <span>Atendemos em todo o Brasil</span>
          <span className="text-pink">•</span>
          <span>+200 marcas lançadas e desenvolvidas</span>
          <span className="text-pink">•</span>
        </div>
      </div>
    </div>
  );
};
