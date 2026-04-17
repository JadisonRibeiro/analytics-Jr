import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { cardReveal, fadeUp, staggerFast, stagger, viewportOnce } from '@/utils/animations';

interface Plan {
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'Para quem está começando a estruturar a operação de dados.',
    features: [
      '1 dashboard estratégico',
      'Até 3 fontes de dados',
      'Atualização diária',
      'Suporte em horário comercial',
      'Onboarding de 2 usuários',
    ],
    cta: 'Solicitar proposta',
  },
  {
    name: 'Pro',
    description: 'Para empresas que já precisam de analytics como vantagem competitiva.',
    features: [
      'Até 4 dashboards interativos',
      'Até 8 fontes de dados',
      'Atualização a cada 4h',
      'Governança e RLS',
      'Suporte prioritário',
      'Treinamento do time (8h)',
    ],
    featured: true,
    badge: 'Mais escolhido',
    cta: 'Solicitar proposta',
  },
  {
    name: 'Enterprise',
    description: 'Solução sob medida com squad dedicado e SLA robusto.',
    features: [
      'Dashboards ilimitados',
      'Integrações ilimitadas',
      'Atualização quase em tempo real',
      'Squad dedicado',
      'SLA 24/7',
      'Consultoria estratégica mensal',
    ],
    cta: 'Falar com vendas',
  },
];

export function PricingSection() {
  return (
    <section id="investimento" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">
            Planos
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[720px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
          >
            Escolha o plano
            <br className="hidden sm:block" />
            que acelera sua operação.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[520px] text-gray-5">
            Cada proposta é montada sob medida, conforme volume de dados, integrações e maturidade analítica do seu time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="grid gap-5 [perspective:1400px] md:grid-cols-3"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={cardReveal}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                p.featured
                  ? 'bg-gradient-to-b from-white to-[#F4F4F2] shadow-[0_40px_80px_-20px_rgba(255,255,255,0.25)] ring-1 ring-white/40 lg:-translate-y-4 lg:scale-[1.02] hover:lg:-translate-y-5'
                  : 'border border-white/10 bg-white/[0.02]'
              }`}
            >
              {p.featured && (
                <>
                  <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_65%)]" />
                  <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.04),transparent_65%)]" />
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                    <Sparkles size={10} /> {p.badge}
                  </span>
                </>
              )}
              <div className={`relative font-heading text-2xl font-bold ${p.featured ? 'text-black' : 'text-white'}`}>
                {p.name}
              </div>
              <p className={`relative mt-3 min-h-[56px] text-sm ${p.featured ? 'text-black/65' : 'text-gray-5'}`}>
                {p.description}
              </p>

              <div
                className={`relative mt-8 h-[1px] w-full ${
                  p.featured
                    ? 'bg-gradient-to-r from-black/25 via-black/10 to-transparent'
                    : 'bg-gradient-to-r from-white/20 via-white/5 to-transparent'
                }`}
              />

              <ul className="relative mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${p.featured ? 'text-black' : 'text-white'}`}
                    />
                    <span className={p.featured ? 'text-black/80' : 'text-gray-5'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                data-magnetic
                className={`relative mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition ${
                  p.featured
                    ? 'bg-black text-white hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.4)]'
                    : 'border border-white/15 text-white hover:border-white hover:bg-white/5'
                }`}
              >
                {p.cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-10 text-center text-sm text-gray-5"
        >
          Investimento sob consulta, personalizado conforme o escopo do projeto.
        </motion.p>
      </div>
    </section>
  );
}
