import React from 'react';
import { trackWhatsappClick } from '../lib/tracking';
import { getRandomWhatsappUrl } from '../utils/whatsapp';

export const FloatingWhatsappButton: React.FC = () => {
  const handleWhatsappRedirect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const whatsappUrl = getRandomWhatsappUrl();

    trackWhatsappClick('floating_whatsapp', () => {
      window.location.href = whatsappUrl;
    });
  };

  return (
    <a
      href="#form"
      onClick={handleWhatsappRedirect}
      aria-label="Falar com a fábrica pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_36px_-12px_rgba(37,211,102,0.78)] transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <span className="absolute inset-1 rounded-full bg-white/12" />
      <img src="/whatsapp-logo.svg" alt="" aria-hidden="true" className="relative h-9 w-9 md:h-10 md:w-10" />
    </a>
  );
};
