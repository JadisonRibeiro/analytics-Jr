export const PHONE = '5591998361022';
export const PHONE_DISPLAY = '+55 91 99836-1022';
export const EMAIL = 'data.analyticsjr@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/analytics.jr?igsh=MmN2Nnk3aDVhcXlt';

const WHATS_MSG = `Olá, Analytics JR! 👋

Cheguei pelo site de vocês e gostaria de conversar sobre dashboards em Power BI para o meu negócio.

Podemos falar?`;

const EMAIL_SUBJECT = 'Contato via site — Analytics JR';

const EMAIL_BODY = `Olá, Analytics JR!

Cheguei pelo site (analytics-jr.com.br) e gostaria de entender como vocês podem me ajudar a transformar dados em decisões.

Um pouco sobre mim:
- Nome:
- Empresa:
- Telefone (com DDD):

Aguardo retorno. Obrigado!`;

export const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATS_MSG)}`;
export const emailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
