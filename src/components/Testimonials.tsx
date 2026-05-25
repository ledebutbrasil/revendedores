import React, { useRef, useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  location: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    initials: 'MR',
    name: 'Mariana R.',
    location: 'Recife • PE',
    text: 'Comprei achando que era hype, voltei pra comprar de novo no mesmo mês. Meu cabelo nunca esteve tão definido.'
  },
  {
    id: 2,
    initials: 'JS',
    name: 'Júlia S.',
    location: 'Belo Horizonte • MG',
    text: 'O perfume do Morango do Amor é coisa de outro mundo. Todo lugar que vou me perguntam o que eu passei.'
  },
  {
    id: 3,
    initials: 'CA',
    name: 'Camila A.',
    location: 'São Paulo • SP',
    text: 'Pele sensível agradece. Uso HEAL todo dia há três meses, marca de fato cumpre o que promete.'
  },
  {
    id: 4,
    initials: 'FN',
    name: 'Fernanda N.',
    location: 'Curitiba • PR',
    text: 'Chegou rápido, embalagem caprichada e o produto entrega muito mais do que esperava.'
  },
  {
    id: 5,
    initials: 'PL',
    name: 'Patrícia L.',
    location: 'Fortaleza • CE',
    text: 'Já comprei pra mim, pra minha mãe e pra minha irmã. Família inteira virou cliente.'
  },
  {
    id: 6,
    initials: 'RA',
    name: 'Renata A.',
    location: 'Porto Alegre • RS',
    text: 'Resultado de verdade na primeira semana. Recomendo para qualquer pessoa que quer praticidade.'
  },
  {
    id: 7,
    initials: 'TB',
    name: 'Thaís B.',
    location: 'Salvador • BA',
    text: 'Custo-benefício absurdo. Pelo preço, esperava menos — entregou muito mais.'
  },
  {
    id: 8,
    initials: 'LM',
    name: 'Letícia M.',
    location: 'Goiânia • GO',
    text: 'Sou cliente fiel há mais de um ano. Toda nova coleção que sai, eu compro de olhos fechados.'
  }
];

export const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const updateIndex = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(':scope > *');
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    const idx = Math.round(track.scrollLeft / step) + 1;
    setCurrentIndex(Math.min(Math.max(idx, 1), TESTIMONIALS.length));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateIndex, { passive: true });
    window.addEventListener('resize', updateIndex);
    return () => {
      track.removeEventListener('scroll', updateIndex);
      window.removeEventListener('resize', updateIndex);
    };
  }, []);

  const handleScroll = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(':scope > *');
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#fafafa] py-22 md:py-16" id="depoimentos">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-11">
          <div className="text-left">
            <h2 className="font-extrabold text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight leading-[1.02] mt-0 mb-0 max-w-[760px]">
              Quem usa, aprova.<br /><em className="not-italic text-pink font-extrabold">Quem revende, gira.</em>
            </h2>
          </div>
          <div className="text-left md:max-w-[420px]">
            <p className="text-[#555] text-[15px] m-0">
              Depoimentos reais de clientes Ledebut sobre qualidade, resultado e recompra.
            </p>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={trackRef}
            className="grid grid-flow-col auto-cols-[calc((100%-32px)/3)] md:auto-cols-[calc((100%-16px)/2)] max-sm:auto-cols-[88%] gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-1 select-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {TESTIMONIALS.map(dep => (
              <article 
                key={dep.id} 
                className="bg-white border border-line rounded-[18px] p-7 flex flex-col gap-4.5 snap-start text-left min-h-full"
              >
                <span className="font-sora text-[64px] leading-[0.7] text-pink font-extrabold select-none">“</span>
                <span className="inline-flex gap-0.5 text-pink -mt-2" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/>
                    </svg>
                  ))}
                </span>
                <p className="text-[15px] leading-[1.5] m-0 text-[#222] font-medium flex-1">
                  {dep.text}
                </p>
                <div className="flex items-center gap-3 border-t border-line pt-4.5 mt-2">
                  <span className="w-[42px] h-[42px] rounded-full bg-ink text-pink flex items-center justify-center font-bold text-sm shrink-0">
                    {dep.initials}
                  </span>
                  <div>
                    <b className="block text-[14.5px] font-bold">{dep.name}</b>
                    <span className="block text-xs text-[#777]">{dep.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-between items-center mt-7 gap-4.5 flex-wrap">
            <div className="text-[#666] text-xs font-semibold tracking-wider">
              <b className="text-ink text-base mr-1">{String(currentIndex).padStart(2, '0')}</b> / {String(TESTIMONIALS.length).padStart(2, '0')}
            </div>
            <div className="flex gap-2.5">
              <button 
                onClick={() => handleScroll(-1)}
                disabled={currentIndex === 1}
                className="w-12 h-12 rounded-full border border-ink text-ink flex items-center justify-center transition-all hover:bg-ink hover:text-white disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Anterior"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
              </button>
              <button 
                onClick={() => handleScroll(1)}
                disabled={currentIndex === TESTIMONIALS.length}
                className="w-12 h-12 rounded-full border border-ink text-ink flex items-center justify-center transition-all hover:bg-ink hover:text-white disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Próximo"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
