# react-countup + react-intersection-observer

**Versões**: `react-countup@6.5.3`, `react-intersection-observer@10.0.3`

## Onde é usado
Contadores animados na seção "Números" (200+ / 500+ / 1.2M / 340%).

## Aplicações no projeto
- **`src/sections/NumbersSection.tsx`**:
  - `useInView({ triggerOnce: true, threshold: 0.3 })` retorna `ref` + `inView`.
  - Quando `inView` vira true, `<CountUp />` inicia a animação de 2.4s com `separator="."` e `decimal=","` (padrão pt-BR) e `decimals` configurável por métrica.
  - `1.2M` usa `decimals: 1` — valores fracionados pós-easing.
  - Antes do viewport o valor exibe "0", evitando que a animação rode fora de tela.
- Padrão desacoplado: contagem só dispara quando o usuário realmente vê — economiza CPU e evita que a animação termine antes do scroll chegar ali.
