import { motion } from 'framer-motion';
import {
  ArrowRight,
  LayoutDashboard,
  Database,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
  Headphones,
  Sparkles,
  Users,
} from 'lucide-react';
import { cardReveal, fadeUp, staggerFast, stagger, viewportOnce } from '@/utils/animations';

const benefits = [
  {
    icon: LayoutDashboard,
    title: 'Dashboards sob medida',
    desc: 'Painéis em Power BI desenhados para as decisões do seu negócio.',
  },
  {
    icon: Database,
    title: 'Integração das fontes',
    desc: 'ERP, CRM, planilhas e APIs conectados em uma única base confiável.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização automática',
    desc: 'Dados sempre frescos, sem retrabalho manual do seu time.',
  },
  {
    icon: ShieldCheck,
    title: 'Governança e segurança',
    desc: 'RLS, versionamento e controle de acesso em todos os projetos.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento do time',
    desc: 'Capacitamos seus usuários para extrair valor real dos painéis.',
  },
  {
    icon: Headphones,
    title: 'Suporte contínuo',
    desc: 'Evolução e monitoria após a entrega — não sumimos depois do go-live.',
  },
  {
    icon: Users,
    title: 'Squad próximo',
    desc: 'Comunicação direta com quem constrói, sem camadas intermediárias.',
  },
  {
    icon: Sparkles,
    title: 'Consultoria estratégica',
    desc: 'Orientação de especialistas para priorizar o que gera mais impacto.',
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
            className="mx-auto mt-4 max-w-[760px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
          >
            Temos planos sob medida
            <br className="hidden sm:block" />
            para cada estágio da sua operação.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[620px] text-lg text-gray-5"
          >
            Cada proposta é apresentada em uma reunião estratégica, onde entendemos o contexto do seu negócio e desenhamos o escopo ideal. Estes são os benefícios que acompanham nossos planos.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardReveal}
              whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-black/10 hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.04] ring-1 ring-black/[0.06]">
                <b.icon size={20} className="text-black" />
              </div>
              <h3 className="relative mt-6 font-heading text-lg font-semibold text-black">{b.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-black/60">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-[520px] text-gray-5">
            Vamos conversar sobre qual plano faz sentido para o seu momento.
          </p>
          <a
            href="#cta"
            data-magnetic
            className="btn btn-primary"
          >
            Agendar reunião
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
