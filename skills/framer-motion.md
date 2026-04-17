# Framer Motion

**Versão**: `framer-motion@11.11.17`

## Onde é usado
Micro-interações, reveal animations, transições de página e drag do carrossel.

## Aplicações no projeto
- **`src/utils/animations.ts`**: `Variants` reutilizáveis — `fadeUp`, `fadeIn`, `stagger`, `scaleIn` com curva `cubic-bezier(0.22,1,0.36,1)` e `viewportOnce` (once + margin -80px).
- **`HeroSection`**: `initial="hidden"` + `animate="show"` com stagger de título/CTA/stats.
- **Todas as seções** usam `whileInView` + `viewport={viewportOnce}` para ativar reveal no scroll.
- **`TestimonialsSection`**: `AnimatePresence` com `drag="x"` e `dragConstraints`; swipe detectado via `onDragEnd` (offset > 80px).
- **`LoadingScreen`**: `AnimatePresence` com `exit` animado; stagger letra-por-letra do nome "ANALYTICS JR".
- **`WhatsAppButton`**: entrada via `spring` (stiffness 220, damping 22) + tooltip no hover.
- **`Header`**: entrada suave do topo (`y: -24 → 0`).
