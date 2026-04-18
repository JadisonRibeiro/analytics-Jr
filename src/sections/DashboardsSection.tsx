import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, LineChart, PieChart, TrendingUp, Wallet, Maximize2, type LucideIcon } from 'lucide-react';
import { cardReveal, fadeUp, staggerFast, stagger, viewportOnce } from '@/utils/animations';

interface DashboardItem {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  embedUrl: string;
  accent: string;
}

const dashboards: DashboardItem[] = [
  {
    title: 'Dashboard Comercial',
    category: 'Vendas & Receita',
    description: 'Visão completa de pipeline, ticket médio, conversão por canal e desempenho comercial em tempo real.',
    icon: TrendingUp,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZDNmNDI4ZjktNmQzNC00OWU0LWI3MTItZmI5MGNhZTYwZWRmIiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    accent: 'from-neon/20 to-transparent',
  },
  {
    title: 'Análise de Projetos',
    category: 'Gestão',
    description: 'Acompanhamento de cronograma, status de entregas, alocação de recursos e saúde de cada projeto.',
    icon: BarChart3,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZWJmOWE1M2UtOTVlYy00YjBkLWI0MzEtYmI2ZGNjN2MyYTBlIiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    accent: 'from-white/10 to-transparent',
  },
  {
    title: 'Análise de Pareto',
    category: 'Qualidade',
    description: 'Priorização dos principais ofensores com base na regra 80/20 para foco em ações de maior impacto.',
    icon: PieChart,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiNmY2MGI2NjctOTJjYi00NTQzLTlmMWItMTk1ZDAwMTdjZjU0IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    accent: 'from-neon/15 to-transparent',
  },
  {
    title: 'Análise Financeira',
    category: 'Controladoria',
    description: 'DRE gerencial, fluxo de caixa, centros de custo e margem por unidade de negócio em um só painel.',
    icon: LineChart,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiYTVmMmY1YTktY2NhYy00ZTFkLWEwODQtMDZmNWZkZDQ5OTE2IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    accent: 'from-white/8 to-transparent',
  },
  {
    title: 'Finanças Pessoais',
    category: 'Rastreamento Pessoal',
    description: 'Controle de receitas, despesas e metas mensais com visão consolidada do patrimônio e do fluxo de caixa pessoal.',
    icon: Wallet,
    embedUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZTgyNmEyY2MtODUyMi00MTE3LTlmMTMtMjA2NzVmMTRhMGE4IiwidCI6IjhlOGY0NzRiLTkwOWMtNDliOS1iNzhlLTFjOGZkYTQ4MDRjNiJ9',
    accent: 'from-neon/15 to-transparent',
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
            Cinco projetos entregues pela Analytics JR — navegue pelos filtros e veja como transformamos dado bruto em decisão.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="grid gap-8 [perspective:1400px] md:grid-cols-2"
        >
          {dashboards.map((d, i) => (
            <motion.article
              key={d.title}
              variants={cardReveal}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-white/25 hover:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${d.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <iframe
                    title={d.title}
                    src={d.embedUrl}
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                  <a
                    href={d.embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${d.title} em nova aba`}
                    className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-black/80"
                  >
                    <Maximize2 size={12} />
                    Abrir em tela cheia
                  </a>
                </div>

                <div className="border-t border-white/10 p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gray-5">
                      {d.category}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                      <d.icon size={16} className="text-white" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-semibold text-white sm:text-[26px]">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-gray-5">{d.description}</p>

                  <a
                    href={d.embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-magnetic
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neon transition hover:gap-3 hover:text-white"
                  >
                    Explorar dashboard
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
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
