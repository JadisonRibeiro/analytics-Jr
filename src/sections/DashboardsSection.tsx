import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import { cardReveal, fadeUp, staggerFast, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

interface DashboardItem {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  embedUrl: string;
  gradient: string;
  cover: string;
}

const dashboards: DashboardItem[] = [
  {
    title: 'Dashboard Comercial',
    category: 'Vendas & Receita',
    description: 'Visão completa de pipeline, ticket médio, conversão por canal e desempenho comercial em tempo real.',
    icon: TrendingUp,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZDNmNDI4ZjktNmQzNC00OWU0LWI3MTItZmI5MGNhZTYwZWRmIiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    cover: 'dashboards/comercial.png',
  },
  {
    title: 'Análise de Projetos',
    category: 'Gestão',
    description: 'Acompanhamento de cronograma, status de entregas, alocação de recursos e saúde de cada projeto.',
    icon: BarChart3,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZWJmOWE1M2UtOTVlYy00YjBkLWI0MzEtYmI2ZGNjN2MyYTBlIiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    gradient: 'from-sky-500/25 via-blue-500/10 to-transparent',
    cover: 'dashboards/projetos.png',
  },
  {
    title: 'Análise de Pareto',
    category: 'Qualidade',
    description: 'Priorização dos principais ofensores com base na regra 80/20 para foco em ações de maior impacto.',
    icon: PieChart,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiNmY2MGI2NjctOTJjYi00NTQzLTlmMWItMTk1ZDAwMTdjZjU0IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    cover: 'dashboards/pareto.png',
  },
  {
    title: 'Análise Financeira',
    category: 'Controladoria',
    description: 'DRE gerencial, fluxo de caixa, centros de custo e margem por unidade de negócio em um só painel.',
    icon: LineChart,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiYTVmMmY1YTktY2NhYy00ZTFkLWEwODQtMDZmNWZkZDQ5OTE2IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    gradient: 'from-violet-500/25 via-purple-500/10 to-transparent',
    cover: 'dashboards/financeiro.png',
  },
  {
    title: 'Finanças Pessoais',
    category: 'Rastreamento Pessoal',
    description: 'Controle de receitas, despesas e metas mensais com visão consolidada do patrimônio e do fluxo de caixa pessoal.',
    icon: Wallet,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZWRjZWQ1MTMtNTQxMS00OGJlLWFkMzUtMjIyOWNkMTliN2M2IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    cover: 'dashboards/financas-pessoais.png',
  },
];

export function DashboardsSection() {
  return (
    <section id="dashboards" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,192,192,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-[640px]">
            <motion.span variants={fadeUp} className="eyebrow text-gray-5">
              Dashboards ao vivo
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
            >
              Painéis reais
              <br className="hidden sm:block" />
              que você pode explorar.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-[460px] text-lg text-gray-5">
            Cinco projetos entregues pela Analytics JR — clique em qualquer um para abrir em tela cheia e navegar pelos filtros.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="grid gap-8 md:grid-cols-2"
        >
          {dashboards.map((d) => (
            <motion.a
              key={d.title}
              href={d.embedUrl}
              target="_blank"
              rel="noreferrer"
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-white/25 hover:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-black">
                <img
                  src={asset(d.cover)}
                  alt={`Prévia do ${d.title}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                  className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-white/80">Ao vivo</span>
                  </div>
                  <span className="rounded-full border border-white/30 bg-black/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur">
                    Clique para explorar
                  </span>
                </div>

                <div className="pointer-events-none absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-black/50 ring-1 ring-white/20 backdrop-blur">
                  <d.icon size={20} className="text-white" strokeWidth={1.7} />
                </div>
              </div>

              <div className="border-t border-white/10 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gray-5">
                    {d.category}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-white sm:text-[26px]">
                  {d.title}
                </h3>
                <p className="mt-3 text-gray-5">{d.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neon transition group-hover:gap-3 group-hover:text-white">
                  Abrir dashboard
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-gray-5">Quer um painel como esses — mas pensado para o seu negócio?</p>
          <a
            href="#cta"
            data-magnetic
            className="btn btn-primary"
          >
            Construir meu dashboard
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
