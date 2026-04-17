# Tipografia — Orbitron + Inter

## Onde é usado
Sistema tipográfico em todo o site: Orbitron para títulos/numerais, Inter para texto.

## Aplicações no projeto
- **`index.html`** — import do Google Fonts:
  - Orbitron pesos 500–900.
  - Inter pesos 300–800.
- **`tailwind.config.ts`** — `fontFamily.heading = ['Orbitron']`, `fontFamily.body = ['Inter']`.
- **`src/index.css`** — `body { font-family: 'Inter' }`, `h1–h6 { font-family: 'Orbitron'; letter-spacing: -0.01em }`.
- **Escala fluida** com `clamp()`:
  - H1 Hero: `clamp(2.6rem, 7vw, 5.5rem)`.
  - H2 seções: `clamp(2rem, 4.5vw, 3.5rem)`.
- **Tracking** diferenciado:
  - Títulos em uppercase: `tracking-tight` + `leading-[0.95–1.05]`.
  - Eyebrows/labels: `tracking-[0.28em]` + `uppercase`.
- **`tabular-nums`** em counters e valores monetários para alinhamento preciso.
