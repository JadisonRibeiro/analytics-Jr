import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import './future-pulse.css';

const fpViewport = { once: true, amount: 0.05 } as const;

const W = 540;
const H = 220;
const BASE_Y = 190;
const NOW_X = 320;

type Pt = { x: number; y: number };

const HIST: Pt[] = [
  { x: 30, y: 160 },
  { x: 80, y: 148 },
  { x: 130, y: 132 },
  { x: 180, y: 138 },
  { x: 230, y: 112 },
  { x: 280, y: 100 },
  { x: 320, y: 82 },
];

const FORECAST: Pt[] = [
  { x: 320, y: 82 },
  { x: 370, y: 66 },
  { x: 420, y: 52 },
  { x: 470, y: 38 },
  { x: 510, y: 26 },
];

function smoothPath(points: Pt[]): string {
  if (!points.length) return '';
  const parts = [`M ${points[0].x},${points[0].y}`];
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const cx = (p0.x + p1.x) / 2;
    parts.push(`C ${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`);
  }
  return parts.join(' ');
}

function reversePath(points: Pt[]): string {
  return smoothPath([...points].reverse()).replace(/^M /, 'L ');
}

const HIST_LINE = smoothPath(HIST);
const FCST_LINE = smoothPath(FORECAST);

const FULL_POINTS = [...HIST, ...FORECAST.slice(1)];
const AREA_PATH =
  smoothPath(FULL_POINTS) +
  ` L ${FULL_POINTS[FULL_POINTS.length - 1].x},${BASE_Y}` +
  ` L ${FULL_POINTS[0].x},${BASE_Y} Z`;

const CONF_UPPER: Pt[] = FORECAST.map((p, i) => ({
  x: p.x,
  y: p.y - (i === 0 ? 0 : 8 + i * 3),
}));
const CONF_LOWER: Pt[] = FORECAST.map((p, i) => ({
  x: p.x,
  y: p.y + (i === 0 ? 0 : 8 + i * 3),
}));
const CONF_PATH = smoothPath(CONF_UPPER) + ' ' + reversePath(CONF_LOWER) + ' Z';

const MONTHS_LABELS: { x: number; label: string }[] = [
  { x: 30, label: 'Mai' },
  { x: 130, label: 'Jul' },
  { x: 230, label: 'Set' },
  { x: 420, label: 'Dez' },
];

const KPIS = [
  { label: 'Acurácia', value: '96.4%', delta: '▲ 3.8%', down: false },
  { label: 'ROI projetado', value: '3.8×', delta: '▲ 18%', down: false },
  { label: 'Lead time', value: '14d', delta: '▼ 6d', down: true },
];

// gauge: 96% of 2π ≈ 5.78rad, along circle r=18 → circumference ≈ 113.1
const GAUGE_CIRC = 2 * Math.PI * 18;
const GAUGE_FILL = GAUGE_CIRC * 0.96;

export function FuturePulse() {
  return (
    <div className="fp-card">
      <div className="fp-scan" aria-hidden />

      <div className="fp-header">
        <span className="fp-badge">
          <span className="fp-badge-dot" />
          Forecast • Live
        </span>
        <span className="fp-header-meta">Modelo ensemble · v4.2</span>
      </div>

      <motion.div
        className="fp-kpis"
        initial="hidden"
        whileInView="show"
        viewport={fpViewport}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
        }}
      >
        {KPIS.map((k) => (
          <motion.div
            key={k.label}
            className="fp-kpi"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="fp-kpi-label">{k.label}</div>
            <div className="fp-kpi-value">{k.value}</div>
            <div className={`fp-kpi-delta${k.down ? ' down' : ''}`}>{k.delta}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="fp-chart">
        <svg
          className="fp-chart-svg"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="fpArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="fpLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#5EEAD4" />
            </linearGradient>
            <linearGradient id="fpConf" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* grid */}
          {[50, 100, 150].map((y) => (
            <line
              key={y}
              x1={10}
              x2={W - 10}
              y1={y}
              y2={y}
              className="fp-grid-line"
            />
          ))}

          {/* Area fill */}
          <motion.path
            d={AREA_PATH}
            fill="url(#fpArea)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={fpViewport}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          />

          {/* Confidence band */}
          <motion.path
            d={CONF_PATH}
            fill="url(#fpConf)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={fpViewport}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          />

          {/* NOW vertical marker */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={fpViewport}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <line
              x1={NOW_X}
              x2={NOW_X}
              y1={14}
              y2={BASE_Y}
              stroke="#5EEAD4"
              strokeWidth={1.2}
              strokeDasharray="3 3"
            />
            <text
              x={NOW_X}
              y={10}
              textAnchor="middle"
              className="fp-now-label"
            >
              Hoje
            </text>
          </motion.g>

          {/* Historical line */}
          <motion.path
            d={HIST_LINE}
            fill="none"
            stroke="url(#fpLine)"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={fpViewport}
            transition={{ duration: 1.3, delay: 0.7, ease: 'easeInOut' }}
          />

          {/* Forecast dashed line */}
          <motion.path
            d={FCST_LINE}
            fill="none"
            stroke="#14B8A6"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={fpViewport}
            transition={{ duration: 1.2, delay: 1.8, ease: 'easeInOut' }}
          />

          {/* Historical data points */}
          {HIST.map((p, i) => (
            <motion.g
              key={`h-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={fpViewport}
              transition={{
                duration: 0.4,
                delay: 0.9 + i * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{ originX: `${p.x}px`, originY: `${p.y}px`, transformBox: 'fill-box' }}
            >
              <circle
                className="fp-data-point-glow"
                cx={p.x}
                cy={p.y}
                r={6}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
              <circle className="fp-data-point" cx={p.x} cy={p.y} r={3} />
            </motion.g>
          ))}

          {/* Forecast point — terminal highlight */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={fpViewport}
            transition={{ duration: 0.5, delay: 3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformBox: 'fill-box' }}
          >
            <circle cx={510} cy={26} r={10} fill="rgba(20, 184, 166, 0.15)" />
            <circle cx={510} cy={26} r={5} fill="#14B8A6" />
            <circle cx={510} cy={26} r={2} fill="#FFFFFF" />
          </motion.g>

          {/* X-axis labels */}
          {MONTHS_LABELS.map((m) => (
            <motion.text
              key={m.label}
              x={m.x}
              y={BASE_Y + 18}
              textAnchor="middle"
              className="fp-axis-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={fpViewport}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {m.label}
            </motion.text>
          ))}
          <motion.text
            x={510}
            y={BASE_Y + 18}
            textAnchor="middle"
            className="fp-axis-label"
            style={{ fill: '#5EEAD4' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={fpViewport}
            transition={{ duration: 0.5, delay: 3.1 }}
          >
            +3M
          </motion.text>
        </svg>
      </div>

      <motion.div
        className="fp-footer"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={fpViewport}
        transition={{ duration: 0.7, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="fp-gauge" viewBox="0 0 44 44" aria-hidden>
          <circle cx={22} cy={22} r={18} className="fp-gauge-track" />
          <motion.circle
            cx={22}
            cy={22}
            r={18}
            className="fp-gauge-fill"
            strokeDasharray={`${GAUGE_FILL} ${GAUGE_CIRC}`}
            initial={{ strokeDashoffset: GAUGE_CIRC }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={fpViewport}
            transition={{ duration: 1.4, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            transform="rotate(-90 22 22)"
          />
          <text
            x={22}
            y={26}
            textAnchor="middle"
            className="fp-gauge-text"
          >
            96
          </text>
        </svg>

        <div className="fp-footer-body">
          <div className="fp-footer-title">Confiança do modelo</div>
          <div className="fp-footer-sub">Horizonte de +3 meses · ensemble v4.2</div>
        </div>

        <div className="fp-footer-delta">
          <TrendingUp size={12} />
          +42%
        </div>
      </motion.div>
    </div>
  );
}
