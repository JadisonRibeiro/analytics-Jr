# Canvas 2D API — sistema de partículas

## Onde é usado
Background animado do tema dark (Hero, Numbers, FAQ, CTA…).

## Aplicações no projeto
- **`src/components/AnimatedBackground.tsx` → `DarkBg`**:
  - 80 partículas com posição, velocidade (`vx/vy` entre -0.175 e +0.175), raio (0.8–2px) e opacidade (0.3–0.6).
  - Rebote nas bordas invertendo o sinal da velocidade.
  - Linhas de conexão entre pares com distância < 120px, alfa inversamente proporcional (`0.15 * (1 - d/120)`).
  - `requestAnimationFrame` para o loop; `cancelAnimationFrame` no cleanup.
  - **DPR scaling**: `ctx.scale(dpr, dpr)` limitado a 2x para nitidez em telas retina sem custo excessivo.
  - `window.resize` re-inicializa dimensões e população de partículas.
- Sobreposição `.perspective-grid` + gradiente radial para profundidade cinematográfica.
