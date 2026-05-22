export const PHONE = '5591998361022';
export const PHONE_DISPLAY = '+55 91 99836-1022';
export const EMAIL = 'contato.analisajr@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/analisa.jr';

const WHATS_MSG = `Olá, Analisa Jr! 👋

Cheguei pelo site de vocês e gostaria de conversar sobre dashboards em Power BI para o meu negócio.

Podemos falar?`;

const EMAIL_SUBJECT = 'Contato via site — Analisa Jr';

const EMAIL_BODY = `Olá, Analisa Jr!

Cheguei pelo site (analisajr.com) e gostaria de entender como vocês podem me ajudar a transformar dados em decisões.

Um pouco sobre mim:
- Nome:
- Empresa:
- Telefone (com DDD):

Aguardo retorno. Obrigado!`;

export const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATS_MSG)}`;
export const emailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
