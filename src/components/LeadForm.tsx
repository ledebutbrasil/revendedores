import React from 'react';
import { trackWhatsappClick } from '../lib/tracking';

const whatsappNumber = '5521979246710';
const whatsappMessage = 'Olá! Gostaria de receber o catálogo de revenda da Ledebut e falar com a fábrica.';

export const LeadForm: React.FC = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsappClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    trackWhatsappClick('lead_form', () => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  };

  return (
    <section 
      className="relative py-24 md:py-20 bg-ink text-white overflow-hidden border-t border-[#1a1a1a]" 
      id="form"
    >
      {/* Glows animados de fundo para profundidade e estética moderna */}
      <div className="absolute top-[-10%] left-[10%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-pink/20 rounded-full blur-[100px] md:blur-[130px] animate-glow-slow pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-pink/15 rounded-full blur-[120px] md:blur-[150px] animate-glow-reverse pointer-events-none" />

      <div className="relative wrap max-w-[800px] mx-auto text-center px-4 z-10">
        {/* Badge / Tag */}
        <span className="inline-flex items-center gap-2 bg-pink/10 backdrop-blur-md text-pink font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-pink/25 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          Atendimento On-line
        </span>

        {/* Title */}
        <h2 className="font-fraunces font-extrabold text-[36px] sm:text-[44px] md:text-[52px] tracking-tight leading-[1.05] mt-0 mb-5 text-white">
          Fale direto com a <em className="italic text-pink">fábrica</em> pelo WhatsApp
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg leading-relaxed text-[#b0b0b5] max-w-[620px] mx-auto mb-10">
          Clique no botão abaixo para iniciar o seu atendimento. Nosso time comercial está online pronto para te enviar o catálogo completo, tabela de preços de fábrica e tirar todas as suas dúvidas.
        </p>

        {/* Action Button & Trust Info Card */}
        <div className="bg-[#121214]/65 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)] max-w-[600px] mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="w-full inline-flex items-center justify-center gap-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white py-5 px-8 rounded-full font-extrabold text-base sm:text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_15px_30px_-5px_rgba(37,211,102,0.45)] cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <svg 
              className="w-6 h-6 fill-current shrink-0" 
              viewBox="0 0 24 24"
            >
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.773 1.22c5.506 0 9.99-4.479 9.99-9.985a9.983 9.983 0 0 0-9.984-9.983zm4.996 14.159c-.273.767-1.579 1.394-2.176 1.481-.547.079-1.258.118-2.036-.131-.767-.246-1.528-.598-2.222-1.029a10.871 10.871 0 0 1-3.693-3.686c-.524-.707-.864-1.404-1.077-2.122-.213-.718-.119-1.428.181-2.06.299-.631.956-1.12 1.341-1.341.118-.067.234-.1.342-.1.109 0 .216.002.316.006.136.006.299-.028.461.359.183.438.624 1.517.679 1.629.055.111.092.241.018.388-.073.148-.11.24-.221.37l-.332.387c-.11.13-.227.271-.097.494.13.223.578.955 1.24 1.545.852.76 1.567.994 1.79.1.223-.11.479-.479.712-.8.192-.266.388-.223.639-.13.25.093 1.58.744 1.853.882.272.138.455.207.522.324.067.117.067.68-.206 1.447z"/>
            </svg>
            <span>Iniciar Conversa no WhatsApp</span>
          </a>

          {/* Microcopy / Trust signals */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10 text-left">
            <div className="flex items-center gap-2.5 text-xs text-[#d0d0d5]">
              <span className="w-5.5 h-5.5 rounded-full bg-pink/10 text-pink inline-flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </span>
              <span>Catálogo Completo Grátis</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#d0d0d5]">
              <span className="w-5.5 h-5.5 rounded-full bg-pink/10 text-pink inline-flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </span>
              <span>Tabela Direta de Fábrica</span>
            </div>
          </div>
        </div>

        {/* Legal text / notice */}
        <p className="text-xs text-[#808085] mt-6 max-w-[420px] mx-auto">
          *Atendimento comercial de segunda a sexta-feira, das 09h às 18h.
        </p>
      </div>
    </section>
  );
};
