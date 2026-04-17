# Recharts

**Versão**: `recharts@2.13.3`

## Onde é usado
Gráficos de dados no Hero e nos cards de cases (verso do flip 3D).

## Aplicações no projeto
- **`HeroSection`** — `AreaChart` com:
  - `ResponsiveContainer` adaptando ao card glass.
  - `defs` com `linearGradient` (`#C0C0C0` com opacidade 0.5 → 0).
  - `CartesianGrid` horizontal sutil (`rgba(255,255,255,0.05)`).
  - `XAxis/YAxis` sem linha/ticks, cor `#6B6B6B`, fonte 10px.
  - `Tooltip` com fundo dark (`#1C1C1C`) e borda `#3A3A3A`.
  - 12 pontos (Jan→Dez) simulando crescimento de receita.
- **`CasesSection` → `MiniChart`** — `LineChart` compacto (48px de altura), um para "Antes" (stroke cinza) e outro para "Depois" (stroke branco), sem dots, sem eixos — visual comparativo limpo.
