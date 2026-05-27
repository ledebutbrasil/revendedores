import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-line" id="hero">
      
      {/* 1. MODO DESKTOP (lg:grid, oculto no mobile) */}
      <div className="hidden lg:grid grid-cols-2 min-h-[580px] items-stretch">
        
        {/* Coluna de Texto (Esquerda) */}
        <div className="flex flex-col justify-center items-start text-left lg:pl-[max(32px,calc((100vw-1240px)/2+32px))] lg:pr-14 py-20 z-10 bg-white">
          <span className="inline-flex items-center gap-2.5 bg-pink text-white font-bold text-xs tracking-wider px-3.5 py-2.25 rounded-full uppercase before:content-[''] before:w-2 before:h-2 before:bg-white before:rounded-full before:shadow-[0_0_0_4px_rgba(255,255,255,0.25)] mb-6">
            Vagas limitadas por cidade
          </span>
          
          <h1 className="font-fraunces font-extrabold text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.05] tracking-tight mt-0 mb-6 text-ink">
            Acesso direto à <em className="italic text-pink font-extrabold">fábrica</em> para lojistas e revendedores
          </h1>
          
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-[560px] leading-[1.5] mb-8 font-medium">
            A Ledebut está abrindo novos parceiros no Brasil para atender a alta demanda com margens de até 5x.
          </p>
          
          <div className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#form" 
              className="inline-flex items-center justify-center gap-2.5 bg-pink text-white px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-[#e60079] hover:-translate-y-[1px] shadow-[0_10px_24px_-10px_rgba(255,0,140,0.55)]"
            >
              Quero falar com a fábrica
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#campeoes" 
              className="inline-flex items-center justify-center gap-2.5 bg-transparent text-ink border-2 border-pink px-6.5 py-4.5 rounded-full font-bold text-base tracking-wide transition-all hover:bg-pink hover:text-white"
            >
              Ver campeões de vendas
            </a>
          </div>
          
          <div className="mt-7 flex flex-wrap items-center gap-4.5 text-[#666] text-[13.5px]">
            <span className="w-2.25 h-2.25 bg-pink rounded-full animate-pulse-slow"></span>
            <span>Comercial atendendo agora • Resposta em até 24h úteis</span>
          </div>
        </div>

        {/* Coluna da Imagem (Direita) */}
        <div className="relative w-full h-auto shrink-0">
          <img 
            src="/hero-bg.webp" 
            alt="Ledebut Revendedores" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>

      {/* 2. MODO MOBILE (lg:hidden, oculto no desktop) */}
      <div className="lg:hidden relative w-full aspect-[9/16] min-h-[580px] xs:min-h-[640px] sm:min-h-[700px] overflow-hidden bg-white">
        {/* Imagem de Fundo (fundo-hero.webp) */}
        <img 
          src="/fundo-hero.webp" 
          alt="Produtos Ledebut" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Degradê linear de branco para transparente no topo */}
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white via-white/95 to-transparent z-1 pointer-events-none" />
        
        {/* Conteúdo Sobreposto no Topo */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-center text-center px-6 pt-3 sm:pt-6 pb-8 overflow-y-auto">
          {/* Estrelas */}
          <div className="flex justify-center gap-0.5 text-pink">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          
          {/* Subtítulo Avaliações */}
          <span className="font-fraunces text-xs sm:text-sm text-ink font-medium tracking-tight mt-1.5">
            Baseado em +10.000 avaliações
          </span>

          {/* Título em Rosa */}
          <h1 className="font-fraunces font-extrabold text-[27px] sm:text-[32px] leading-[1.12] tracking-tight text-pink max-w-[320px] sm:max-w-[380px] m-0 mt-4">
            Acesso direto à fábrica para lojistas e revendedores
          </h1>
          
          {/* Texto Descritivo */}
          <p className="font-fraunces text-[12px] xs:text-[13px] sm:text-base text-[#111] max-w-[310px] xs:max-w-[340px] sm:max-w-[380px] leading-[1.4] m-0 mt-3 font-medium">
            A Ledebut está abrindo novos parceiros no Brasil para atender a alta demanda com margens de até 5x
          </p>
          
          {/* Botão Preto Único */}
          <a 
            href="#form" 
            className="inline-flex items-center justify-center bg-ink text-white py-3.5 px-5 rounded-full font-sora font-extrabold text-[12px] xs:text-[13px] sm:text-sm tracking-wider uppercase shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)] active:scale-[0.98] w-full max-w-[290px] mt-6 cursor-pointer text-center whitespace-nowrap"
          >
            Quero falar com a fábrica
          </a>
        </div>
      </div>

    </section>
  );
};
