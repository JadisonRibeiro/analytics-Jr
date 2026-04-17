# React 18 + TypeScript

**Versões**: `react@18.3.1`, `typescript@5.6.3`

## Onde é usado
Toda a aplicação. Componentes funcionais com hooks, strict mode habilitado.

## Aplicações no projeto
- **`src/App.tsx`** — root component com gating via `LoadingScreen`, bloqueando scroll do body até o carregamento terminar.
- **`src/main.tsx`** — bootstrap com `React.StrictMode`.
- **Hooks customizados**: `useScrollAnimation` (threshold de scroll via listener passivo).
- **TypeScript estrito**: interfaces e types para props (`BgVariant`, `Props`), sem `any`.
- **Aliases de import**: `@/` mapeado para `./src` em `vite.config.ts` + `tsconfig.json`.
