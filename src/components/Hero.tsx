import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-line" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[580px] items-stretch">
        
        {/* Coluna da Imagem (Topo no mobile, Direita no desktop) */}
        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-auto order-first lg:order-last shrink-0">
          <img 
            src="/hero-bg.webp" 
            alt="Ledebut Revendedores" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Coluna de Texto (Abaixo no mobile, Esquerda no desktooop) */}
        <div className="flex flex-col justify-center items-start text-left px-5 sm:px-10 lg:pl-[max(32px,calc((100vw-1240px)/2+32px))] lg:pr-14 py-12 sm:py-16 md:py-20 z-10 bg-white">
          <span className="inline-flex items-center gap-2.5 bg-pink text-white font-bold text-xs tracking-wider px-3.5 py-2.25 rounded-full uppercase before:content-[''] before:w-2 before:h-2 before:bg-white before:rounded-full before:shadow-[0_0_0_4px_rgba(255,255,255,0.25)] mb-6">
            Vagas limitadas por cidade
          </span>
          
          <h1 className="font-extrabold text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.05] tracking-tight mt-0 mb-6 text-ink">
            Oportunidade para revendedores: produtos virais Ledebut com <em className="not-italic text-pink font-extrabold">margem de revenda de até 5x</em>
          </h1>
          
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-[560px] leading-[1.5] mb-8 font-medium">
            A procura está alta e estamos abrindo novos parceiros físicos para atender essa demanda com suporte direto da fábrica.
          </p>
          
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a 
              href="#form" 
              className="inline-flex items-center justify-center gap-2.5 bg-pink text-white px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-[#e60079] hover:-translate-y-[1px] shadow-[0_10px_24px_-10px_rgba(255,0,140,0.55)] max-sm:w-full"
            >
              Quero falar com a fábrica
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#campeoes" 
              className="inline-flex items-center justify-center gap-2.5 bg-transparent text-ink border-2 border-pink px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-pink hover:text-white max-sm:w-full"
            >
              Ver campeões de vendas
            </a>
          </div>
          
          <div className="mt-7 flex flex-wrap items-center gap-4.5 text-[#666] text-[13.5px]">
            <span className="w-2.25 h-2.25 bg-pink rounded-full animate-pulse-slow"></span>
            <span>Comercial atendendo agora • Resposta em até 24h úteis</span>
          </div>
        </div>

      </div>
    </section>
  );
};
