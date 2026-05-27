import React from 'react';

export const Highlights: React.FC = () => {
  return (
    <section className="border-t border-b border-line bg-[#f8f8f8] py-8 px-2 md:py-10">
      <div className="grid grid-cols-3 max-w-[1100px] mx-auto relative">
        
        {/* Item 1 */}
        <div className="relative flex flex-col items-center text-center px-1.5 sm:px-4">
          {/* Icon (Direto, sem box preta) */}
          <div className="text-pink mb-2 shrink-0">
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <b className="text-[12px] xs:text-[13.5px] md:text-base font-bold tracking-tight text-ink leading-tight">
              +10 anos
            </b>
            <span className="text-[#666] text-[9.5px] xs:text-[11px] md:text-[13px] leading-tight font-medium">
              de mercado e fábrica
            </span>
          </div>
          {/* Divisor vertical */}
          <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-line" />
        </div>

        {/* Item 2 */}
        <div className="relative flex flex-col items-center text-center px-1.5 sm:px-4">
          {/* Icon (Direto, sem box preta) */}
          <div className="text-pink mb-2 shrink-0">
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8 6 8 10 12 14c4-4 4-8 0-12z"/>
              <path d="M2 22c4-4 8-4 10 0 2-4 6-4 10 0"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <b className="text-[12px] xs:text-[13.5px] md:text-base font-bold tracking-tight text-ink leading-tight">
              Todo o Brasil
            </b>
            <span className="text-[#666] text-[9.5px] xs:text-[11px] md:text-[13px] leading-tight font-medium">
              logística e suporte
            </span>
          </div>
          {/* Divisor vertical */}
          <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-line" />
        </div>

        {/* Item 3 */}
        <div className="relative flex flex-col items-center text-center px-1.5 sm:px-4">
          {/* Icon (Direto, sem box preta) */}
          <div className="text-pink mb-2 shrink-0">
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h18l-2 13H5L3 7z"/>
              <path d="M8 7V5a4 4 0 0 1 8 0v2"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <b className="text-[12px] xs:text-[13.5px] md:text-base font-bold tracking-tight text-ink leading-tight">
              +200 marcas
            </b>
            <span className="text-[#666] text-[9.5px] xs:text-[11px] md:text-[13px] leading-tight font-medium">
              lançadas pela fábrica
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
