const whatsappNumbers = ['557181751436', '557182960926', '557182931532'];
const whatsappMessage = 'Olá! Gostaria de receber o catálogo de revenda da Ledebut e falar com a fábrica.';

export const getRandomWhatsappUrl = () => {
  const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];

  return `https://wa.me/${randomNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
