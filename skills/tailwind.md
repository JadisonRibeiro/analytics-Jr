# Tailwind CSS

**Versão**: `tailwindcss@3.4.14`

## Onde é usado
Estilização primária de todo o site — utility-first, com tokens customizados e keyframes.

## Aplicações no projeto
- **`tailwind.config.ts`**: paleta da marca (`brand-black`, `brand-light`, `gray-1..5`, `neon`, `neon-2`), famílias de fonte (`heading=Orbitron`, `body=Inter`) e **keyframes** próprios (`shimmer`, `float`, `glow-pulse`, `blink`, `draw`, `rotateSlow`).
- **`src/index.css`**: `@tailwind base/components/utilities` + CSS vars e classes auxiliares (`glass-dark`, `perspective-grid`, `eyebrow`, `btn-primary/ghost/dark`, `text-gradient-wg/bg`).
- **Design responsivo**: breakpoints `md:` e `lg:` em todas as seções (Hero vira 1 coluna < lg, grid de serviços 1/2/3 colunas).
- **Arbitrary values**: `text-[clamp(2rem,4.5vw,3.5rem)]`, `tracking-[0.28em]`, `bg-white/[0.03]`.
