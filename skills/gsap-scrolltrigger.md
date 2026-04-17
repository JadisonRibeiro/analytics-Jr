# GSAP + ScrollTrigger

**Versões**: `gsap@3.12.5`, `@gsap/react@2.1.2`

## Onde é usado
Animação scroll-driven de desenho de linha na seção "Como funciona".

## Aplicações no projeto
- **`src/sections/HowItWorksSection.tsx`**:
  - `gsap.registerPlugin(ScrollTrigger)`.
  - SVG vertical com `<line>` + `strokeDasharray="1000"` que é desenhado via `strokeDashoffset: 1000 → 0` conforme o usuário rola.
  - `ScrollTrigger`: `trigger: wrapRef`, `start: 'top 70%'`, `end: 'bottom 60%'`, `scrub: 0.6` — animação fica atrelada ao scroll.
  - `gsap.context` + `ctx.revert()` no cleanup para evitar leaks quando o componente desmonta.
