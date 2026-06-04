const whatsappNumbers = ['557181751436', '557182960926', '557182931532'];
const whatsappMessage = 'Olá! Gostaria de receber o catálogo de revenda da Ledebut e falar com a fábrica.';

const getRandomWhatsappNumber = () => {
  const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);

  return whatsappNumbers[randomIndex];
};

export const getRandomWhatsappUrl = () => {
  const whatsappNumber = getRandomWhatsappNumber();

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
