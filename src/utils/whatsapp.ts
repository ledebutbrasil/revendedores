const whatsappNumbers = ['15559922763'];
const whatsappMessage = 'Olá! Gostaria de receber o catálogo de revenda da Ledebut e falar com a fábrica.';

const getRandomWhatsappNumber = () => {
  const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);

  return whatsappNumbers[randomIndex];
};

export const getRandomWhatsappUrl = () => {
  const whatsappNumber = getRandomWhatsappNumber();

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
