# Vite

**Versão**: `vite@5.4.10` + `@vitejs/plugin-react@4.3.3`

## Onde é usado
Build tool e dev server do projeto.

## Aplicações no projeto
- **`vite.config.ts`**: plugin React + alias `@ → ./src`.
- **Scripts**: `dev` (servidor local), `build` (`tsc && vite build`), `preview`.
- **Tree-shaking automático**: apenas os componentes usados do `lucide-react` e `recharts` entram no bundle final.
- **HMR**: iteração instantânea durante desenvolvimento das seções.
