const whatsappNumbers = ['557181751436', '557182960926', '557182931532'];
const whatsappMessage = 'Olá! Gostaria de receber o catálogo de revenda da Ledebut e falar com a fábrica.';
const whatsappRotationKey = 'ledebut_whatsapp_rotation_index';

const getNextWhatsappNumber = () => {
  if (typeof window === 'undefined') {
    return whatsappNumbers[0];
  }

  try {
    const currentIndex = Number.parseInt(window.localStorage.getItem(whatsappRotationKey) ?? '-1', 10);
    const nextIndex = Number.isFinite(currentIndex)
      ? (currentIndex + 1) % whatsappNumbers.length
      : 0;

    window.localStorage.setItem(whatsappRotationKey, String(nextIndex));

    return whatsappNumbers[nextIndex];
  } catch {
    return whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
  }
};

export const getRandomWhatsappUrl = () => {
  const whatsappNumber = getNextWhatsappNumber();

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
