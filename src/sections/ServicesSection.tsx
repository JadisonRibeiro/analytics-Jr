import { motion } from 'framer-motion';
import { LayoutDashboard, Database, GitBranch, Zap, Shield, GraduationCap, ArrowUpRight } from 'lucide-react';
import { cardReveal, fadeUp, stagger, staggerFast, viewportOnce } from '@/utils/animations';

const services = [
  { icon: LayoutDashboard, title: 'Dashboards interativos', desc: 'Painéis visuais e acionáveis que respondem às perguntas certas em tempo real.' },
  { icon: Database, title: 'Modelagem de dados', desc: 'Estruturas otimizadas em estrela, com relacionamentos robustos e performance alta.' },
  { icon: GitBranch, title: 'ETL & integrações', desc: 'Pipelines que unificam ERP, CRM, planilhas e APIs em uma fonte única da verdade.' },
  { icon: Zap, title: 'Automação de relatórios', desc: 'Entregas automáticas para stakeholders no formato e horário certos, sem esforço manual.' },
  { icon: Shield, title: 'Governança & segurança', desc: 'RLS, versionamento e controle granular para proteger o ativo mais estratégico: seus dados.' },
  { icon: GraduationCap, title: 'Treinamento & consultoria', desc: 'Capacitamos seu time para operar, evoluir e extrair o máximo da sua stack de BI.' },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-brand-black py-28 lg:min-h-[820px]">
      <div className="perspective-grid opacity-30" />
      <motion.img
        src="/maoia1.webp"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-[6%] top-1/2 hidden h-[620px] w-auto max-w-[36vw] -translate-y-1/2 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(192,192,192,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative z-10 mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-[640px]">
            <motion.span variants={fadeUp} className="eyebrow text-gray-5">Serviços</motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
            >
              Analytics completo,
              <br className="hidden sm:block" />
              do dado bruto à decisão.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-[420px] text-lg text-gray-5">
            Seis frentes especializadas — combinadas sob medida para o momento da sua operação.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="relative z-10 grid gap-5 [perspective:1200px] md:grid-cols-2 lg:grid-cols-2 lg:pr-[400px] xl:pr-[440px]"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-black/10 hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={viewportOnce}
                  transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.04] text-black ring-1 ring-black/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:bg-black/[0.08]"
                >
                  <s.icon size={20} />
                </motion.div>
                <ArrowUpRight size={18} className="translate-y-1 text-black/40 transition-all group-hover:-translate-y-0 group-hover:text-black" />
              </div>
              <h3 className="relative mt-6 font-heading text-lg font-semibold text-black">{s.title}</h3>
              <p className="relative mt-3 text-black/60">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
