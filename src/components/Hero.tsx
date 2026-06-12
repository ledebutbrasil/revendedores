import React from 'react';
import { trackWhatsappClick } from '../lib/tracking';
import { getRandomWhatsappUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const handleWhatsappRedirect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const whatsappUrl = getRandomWhatsappUrl();

    trackWhatsappClick('hero', () => {
      window.location.href = whatsappUrl;
    });
  };

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
            Acesso direto à <em className="italic text-pink font-extrabold">fábrica</em> para lojistas e revendedores de cosméticos.
          </h1>
          
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-[560px] leading-[1.5] mb-8 font-medium">
            A Ledebut está abrindo novos parceiros no Brasil para atender a alta demanda com margens de até 5x.
          </p>
          
          <div className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#form" 
              onClick={handleWhatsappRedirect}
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
      <div className="mobile-hero-frame lg:hidden relative w-full overflow-hidden bg-white">
        {/* Imagem de Fundo (fundo-hero.webp) */}
        <img 
          src="/fundo-hero.webp" 
          alt="Produtos Ledebut" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Degradê linear de branco para transparente no topo */}
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white via-white/95 to-transparent z-1 pointer-events-none" />
        
        {/* Conteúdo Sobreposto no Topo */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-center text-center px-5 pt-[clamp(6px,1.5svh,16px)] pb-[86px]">
          {/* Estrelas + avaliações */}
          <div className="flex shrink-0 items-center justify-center gap-1.5 text-pink">
            <span className="flex items-center gap-0.5">
              <svg className="w-[clamp(13px,4vw,17px)] h-[clamp(13px,4vw,17px)] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg className="w-[clamp(13px,4vw,17px)] h-[clamp(13px,4vw,17px)] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg className="w-[clamp(13px,4vw,17px)] h-[clamp(13px,4vw,17px)] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg className="w-[clamp(13px,4vw,17px)] h-[clamp(13px,4vw,17px)] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg className="w-[clamp(13px,4vw,17px)] h-[clamp(13px,4vw,17px)] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </span>
            <span className="font-fraunces text-[clamp(10.5px,3vw,13px)] text-ink font-medium tracking-tight whitespace-nowrap">
              Baseado em +10.000 avaliações
            </span>
          </div>

          {/* Título em Rosa */}
          <h1 className="font-fraunces font-extrabold text-[clamp(25px,7.6vw,31px)] leading-[1.02] tracking-tight text-pink max-w-[350px] m-0 mt-[clamp(7px,1.5svh,12px)]">
            <span className="block">Acesso direto à fábrica</span>
            <span className="block">para lojistas e revendedores</span>
            <span className="block">de cosméticos.</span>
          </h1>
          
          {/* Texto Descritivo */}
          <p className="font-fraunces text-[clamp(12px,3.35vw,14px)] text-[#111] max-w-[340px] leading-[1.25] m-0 mt-[clamp(6px,1.3svh,10px)] font-medium">
            <span className="block">Novos parceiros no Brasil para atender</span>
            <span className="block">alta demanda com margens de até 5x</span>
          </p>
          
          {/* Botão WhatsApp principal no mobile */}
          <a 
            href="#form" 
            onClick={handleWhatsappRedirect}
            className="animate-whatsapp-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-[clamp(11px,3svh,13px)] px-5 rounded-full font-sora font-extrabold text-[clamp(12px,3.3vw,13.5px)] tracking-wider uppercase shadow-[0_14px_30px_-10px_rgba(37,211,102,0.75)] transition-all hover:bg-[#1ebe5d] active:scale-[0.98] w-full max-w-[306px] mt-[clamp(10px,2.2svh,16px)] cursor-pointer text-center whitespace-nowrap"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
              <img src="/whatsapp-logo.svg" alt="WhatsApp" className="h-5 w-5" />
            </span>
            <span>Quero falar com a fábrica</span>
          </a>
        </div>

        {/* Indicador liquid glass para continuar a página */}
        <a
          href="#campeoes"
          aria-label="Arraste para cima para ver mais conteúdo"
          className="absolute left-1/2 bottom-[max(12px,env(safe-area-inset-bottom))] z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/80 drop-shadow-[0_2px_6px_rgba(255,255,255,0.75)]"
        >
          <span>Arraste</span>
          <span className="flex flex-col items-center gap-1">
            <span className="scroll-dot scroll-dot-1 h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            <span className="scroll-dot scroll-dot-2 h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            <span className="scroll-dot scroll-dot-3 h-1.5 w-1.5 rounded-full bg-[#25D366]" />
          </span>
          <svg className="h-4 w-4 text-[#25D366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>

    </section>
  );
};
