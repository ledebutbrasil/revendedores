import React, { useState } from 'react';

interface Product {
  id: string;
  rankLabel: string;
  isHot?: boolean;
  title: string;
  reviews: string;
  benefit: string;
  commercialDiff: string;
  idealFor: string;
  salesHook: string;
  imagePath: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'cremes',
    rankLabel: '#1 mais pedido',
    isHot: true,
    title: 'Creme Cachos',
    reviews: '+12 mil avaliações',
    benefit: 'Definição instantânea com efeito anti-frizz de longa duração.',
    commercialDiff: 'Alto índice de recompra — cliente volta toda 3ª–4ª semana.',
    idealFor: 'Cabelos crespos e cacheados de todos os tipos (2A a 4C).',
    salesHook: '“se você tem cacho, esse é o creme que faltava”',
    imagePath: '/cachos.webp'
  },
  {
    id: 'morango',
    rankLabel: 'Viral nas redes',
    isHot: true,
    title: 'Morango do Amor',
    reviews: '+18 mil avaliações',
    benefit: 'Aroma envolvente que entrega sensação de pele perfumada o dia todo.',
    commercialDiff: 'Produto desejo — vende por curiosidade e fideliza por experiência.',
    idealFor: 'Público feminino jovem, criadoras de conteúdo, presente afetivo.',
    salesHook: '“o perfume que está fazendo todo mundo perguntar o que você usou”',
    imagePath: '/morangodoamor.webp'
  },
  {
    id: 'heal',
    rankLabel: 'Recompra alta',
    title: 'HEAL',
    reviews: '+9 mil avaliações',
    benefit: 'Recuperação acelerada da barreira cutânea com toque seco.',
    commercialDiff: 'Categoria de cuidado contínuo — recompra mensal garantida.',
    idealFor: 'Pelles sensíveis, pós-procedimento e rotina dermo casual.',
    salesHook: '“quem usa uma vez não troca por mais nada”',
    imagePath: '/heal.webp'
  },
  {
    id: 'indispensavel',
    rankLabel: 'Mais vendido',
    title: 'Indispensável',
    reviews: '+15 mil avaliações',
    benefit: 'Item de uso diário que entra no carrinho sem o cliente pensar duas vezes.',
    commercialDiff: 'Ticket de entrada — abre porta para os outros lançamentos da linha.',
    idealFor: 'Público amplo, todas as faixas etárias, rotina do dia a dia.',
    salesHook: '“começou a usar, vira indispensável de verdade”',
    imagePath: '/indispensavel.webp'
  }
];

export const ProductList: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  return (
    <section className="py-22 md:py-16 bg-white" id="campeoes">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-11">
          <div className="text-left">
            <h2 className="font-fraunces font-extrabold text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight leading-[1.02] mt-0 mb-0 max-w-[760px]">
              Os produtos que <em className="italic text-pink font-extrabold">giram sozinhos</em> na sua loja
            </h2>
          </div>
          <div className="text-left md:max-w-[420px]">
            <p className="text-[#555] text-[15px] m-0">
              Toque em qualquer card para abrir o descritivo comercial: benefício, gancho de venda e perfil ideal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[18px] max-sm:grid-cols-2">
          {PRODUCTS.map(product => {
            return (
              <article 
                key={product.id} 
                className="bg-white border border-line rounded-[18px] overflow-hidden flex flex-col relative transition-all duration-250 hover:border-ink hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.3)]"
              >
                <div className="aspect-square relative bg-[#f4f4f4]">
                  <img 
                    src={product.imagePath} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <span className={`absolute left-3.5 top-3.5 text-ink font-bold text-xs px-2.5 py-1.5 rounded-full tracking-wide border ${
                    product.isHot 
                      ? 'bg-pink text-white border-pink' 
                      : 'bg-white text-ink border-line'
                  }`}>
                    {product.rankLabel}
                  </span>
                </div>
                <div className="p-[18px] pb-5 flex flex-col gap-2 text-left">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight m-0 leading-[1.15]">
                    {product.title}
                  </h3>
                  <div className="flex flex-col items-start gap-1 text-[#555] text-xs">
                    <span className="inline-flex gap-0.5 text-pink" aria-label="5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/>
                        </svg>
                      ))}
                    </span>
                    <span className="text-[#666] text-xs">{product.reviews}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProductId(product.id)}
                    className="mt-1.5 self-start bg-transparent text-ink border-1.5 border-ink px-3.5 py-2.25 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-all hover:bg-ink hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span>Ver descritivo</span>
                    <span aria-hidden="true">+</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 p-7 border-1.5 border-dashed border-ink rounded-[18px] bg-white text-left">
          <div className="text-lg font-semibold tracking-tight max-w-[600px]">
            Linha completa com mais de 40 produtos para revenda.
            <small className="block text-[#666] font-normal text-xs mt-1.5 tracking-normal">
              Receba o catálogo digital com preço de fábrica, fotos e descritivos prontos para a sua loja.
            </small>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <span className="inline-flex items-center gap-2 bg-pink text-white py-2 px-3 rounded-full text-xs font-bold tracking-wide uppercase">
              Sem pedido mínimo para começar*
            </span>
            <a 
              href="#form" 
              className="inline-flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-pink duration-200"
            >
              Solicitar catálogo
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
        <small className="block text-left mt-3 text-[#888] text-[12px]">* sujeito à aprovação</small>
      </div>

      {/* Product Detail Modal */}
      {selectedProductId && (() => {
        const product = PRODUCTS.find(p => p.id === selectedProductId);
        if (!product) return null;
        return (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProductId(null)}
          >
            <div 
              className="bg-white text-ink rounded-3xl max-w-[480px] w-full p-6 relative shadow-2xl border border-line animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProductId(null)}
                className="absolute top-4 right-4 text-[#777] hover:text-pink transition-colors w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg cursor-pointer"
                title="Fechar"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-4 mb-5 text-left border-b border-line pb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f4f4f4] shrink-0 border border-line relative">
                  <img src={product.imagePath} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight m-0 leading-tight">{product.title}</h3>
                  <span className="inline-block mt-1 bg-pink/10 text-pink text-[11px] font-bold px-2.5 py-0.75 rounded-full uppercase tracking-wider">
                    {product.rankLabel}
                  </span>
                </div>
              </div>

              <dl className="m-0 flex flex-col gap-4 text-left">
                <div>
                  <dt className="text-xs tracking-widest uppercase text-pink font-bold">Benefício principal</dt>
                  <dd className="m-0 text-sm leading-relaxed text-[#444] mt-1 font-medium">{product.benefit}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest uppercase text-pink font-bold">Diferencial comercial</dt>
                  <dd className="m-0 text-sm leading-relaxed text-[#444] mt-1 font-medium">{product.commercialDiff}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest uppercase text-pink font-bold">Ideal para</dt>
                  <dd className="m-0 text-sm leading-relaxed text-[#444] mt-1 font-medium">{product.idealFor}</dd>
                </div>
                <div className="mt-2 p-3 bg-pink/5 rounded-xl border border-pink/10">
                  <p className="font-bold text-pink text-xs leading-relaxed m-0 text-left">
                    Gancho de venda: {product.salesHook}
                  </p>
                </div>
              </dl>
              
              <div className="mt-5 border-t border-line pt-4">
                <a 
                  href="#form"
                  onClick={() => setSelectedProductId(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-pink text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-[#e60079] hover:-translate-y-[1px] shadow-[0_6px_16px_-6px_rgba(255,0,140,0.5)] cursor-pointer"
                >
                  <span>Solicitar catálogo</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
