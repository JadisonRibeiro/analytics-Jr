# Design tokens & glassmorphism

## Onde é usado
Fundação visual do site — coerência entre seções dark e faixas light.

## Aplicações no projeto
- **`src/index.css` (`:root`)** — CSS vars centralizando a paleta:
  - Fundos: `--brand-black #0A0A0A`, `--brand-light #F0F0EE`.
  - Escala cinza: `--gray-1…5` (de #1C1C1C até #9B9B9B).
  - Neon sutil: `--neon #C0C0C0`, `--neon-2 #A0A0A8` (acentos metálicos, sem saturação).
- **Mesmos tokens** em `tailwind.config.ts` para uso como classes (`bg-brand-black`, `text-gray-5`, `border-neon`).
- **Glassmorphism (`.glass-dark`)**:
  ```css
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  ```
  Aplicado em cards de Problem, Services (dark), Numbers, HowItWorks, Cases, Testimonials e form do CTA. Hover intensifica fundo e borda.
- **Grid em perspectiva (`.perspective-grid`)**:
  Linhas brancas ultra-fracas (4% opacity) em 56×56px com máscara radial — cria profundidade cinematográfica sem poluir.
- **Gradientes de texto**: `text-gradient-wg` (branco→cinza) em títulos dark, `text-gradient-bg` (preto→cinza) em seções light.
- **`.eyebrow`**: pequena label uppercase com linha horizontal antes — padrão em todas as seções.
- **Botões `.btn-primary/ghost/dark`**: `translateY(-2px)` + box-shadow no hover.
