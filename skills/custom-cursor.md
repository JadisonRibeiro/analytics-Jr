# Custom Cursor — dot + ring com lerp e magnetic hover

## Onde é usado
Cursor em todo o site para dispositivos com ponteiro fino (`hover: hover and pointer: fine`).

## Aplicações no projeto
- **`src/components/CustomCursor.tsx`**:
  - Detecção via `window.matchMedia('(hover: hover) and (pointer: fine)')` — desabilita em mobile/touch.
  - **Dot** (12px) segue exatamente o mouse a cada `mousemove` via `transform: translate3d`.
  - **Ring** (40px base, 60px hover) com **easing exponencial** no `requestAnimationFrame`:
    ```
    rx += (mx - rx) * 0.18
    ry += (my - ry) * 0.18
    ```
  - Magnetic hover: `mouseover` detecta `a, button, input, select, textarea, [data-magnetic]` → ring expande com fundo `rgba(255,255,255,0.1)`.
  - Dot com `mixBlendMode: 'difference'` para contraste dinâmico em qualquer background.
- **`src/index.css`**: `* { cursor: none !important }` dentro do media query, ocultando o cursor nativo.
