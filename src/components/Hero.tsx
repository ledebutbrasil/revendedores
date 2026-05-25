import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-12 relative overflow-hidden" id="hero">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2.5 bg-pink text-white font-bold text-xs tracking-wider px-3.5 py-2.25 rounded-full uppercase before:content-[''] before:w-2 before:h-2 before:bg-white before:rounded-full before:shadow-[0_0_0_4px_rgba(255,255,255,0.25)]">
            Vagas limitadas por cidade
          </span>
          <h1 className="font-extrabold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.02] tracking-tight mt-6 mb-6">
            Oportunidade para revendedores: produtos virais Ledebut com <em className="not-italic text-pink font-extrabold">margem de revenda de até 6x</em>
          </h1>
          <p className="text-base md:text-lg text-[#333] max-w-[560px] leading-[1.5] mb-8">
            A procura está alta e estamos abrindo novos parceiros físicos para atender essa demanda com suporte direto da fábrica.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#form" 
              className="inline-flex items-center gap-2.5 bg-pink text-white px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-[#e60079] hover:-translate-y-[1px] shadow-[0_10px_24px_-10px_rgba(255,0,140,0.55)]"
            >
              Quero falar com a fábrica
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#campeoes" 
              className="inline-flex items-center gap-2.5 bg-transparent text-ink border-2 border-pink px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-pink hover:text-white"
            >
              Ver campeões de vendas
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4.5 text-[#666] text-[13.5px]">
            <span className="w-2.25 h-2.25 bg-pink rounded-full animate-pulse-slow"></span>
            <span>Comercial atendendo agora • Resposta em até 24h úteis</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="/hero-foto.webp" 
            alt="Produtos Ledebut" 
            className="w-full max-w-[450px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
