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
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <img src="/whatsapp-logo.svg" alt="" aria-hidden="true" className="h-14 w-14 drop-shadow-[0_14px_18px_rgba(0,0,0,0.22)] md:h-16 md:w-16" />
    </a>
  );
};
