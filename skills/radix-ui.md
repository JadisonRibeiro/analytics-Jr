# Radix UI

**Versões**: `@radix-ui/react-accordion@1.2.1`, `@radix-ui/react-dialog@1.1.2`, `@radix-ui/react-switch@1.2.6`

## Onde é usado
Primitivas acessíveis e sem estilo para FAQ, menu mobile e toggle de pricing.

## Aplicações no projeto
- **`FaqSection`** — `Accordion.Root type="single" collapsible`. Cada item abre/fecha uma resposta. O ícone `+` gira com `group-data-[state=open]:rotate-45`. Keyframes `accordion-down/up` em `index.css` animam a altura usando `--radix-accordion-content-height`.
- **`Header`** — `Dialog.Root/Trigger/Portal/Overlay/Content` constrói o menu fullscreen no mobile (<md). Fecha pelo botão X ou clique em link (`onClick={() => setOpen(false)}`).
- **`PricingSection`** — `Switch.Root` com `checked={annual}`, thumb animado via `data-[state=checked]:translate-x-[22px]`; toggle entre preço mensal e anual (-20%).
