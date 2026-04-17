# Acessibilidade & Responsividade

## Onde é usado
Transversal — cada seção e componente aplica pelo menos um desses padrões.

## Aplicações no projeto
### Acessibilidade
- **`aria-label`** em todos os ícone-only buttons (`Logo`, WhatsApp, carousel chevrons, footer socials, hamburger, voltar-ao-topo).
- **`aria-hidden`** em elementos decorativos (backgrounds animados, grid, gradientes).
- **Radix primitives** entregam roles, `aria-expanded`, foco gerenciado e navegação por teclado (Accordion, Dialog, Switch) de graça.
- **Foco visível**: `focus-visible` preservado, apenas `outline: none` em inputs/buttons de formulário quando o design customizado substitui.
- **Labels semânticos** no form do CTA (`<label>` envolvendo input + texto).

### Responsividade
- **Mobile-first**: grids começam em 1 coluna e escalam com `md:` e `lg:`.
- **Hero**: layout `lg:grid-cols-[3fr_2fr]`; gráfico Recharts escondido em < lg (`hidden lg:block`) para preservar espaço e performance no mobile.
- **Header**: navegação em `md:flex`; abaixo disso abre Radix Dialog fullscreen via hambúrguer.
- **CustomCursor** desabilitado em dispositivos touch (media query `(hover: hover) and (pointer: fine)`).
- **Body** com `font-size: 15px` em `max-width: 768px` para densidade visual melhor no mobile.
- **Prevent horizontal scroll**: `overflow-x: hidden` global em `body`.
