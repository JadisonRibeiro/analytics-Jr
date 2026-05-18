import { motion, type Variants } from 'framer-motion';
import { LayoutDashboard, Database, GitBranch, Zap, Shield, GraduationCap, ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';
import { useIsMobile } from '@/utils/useIsMobile';

const services = [
  {
    icon: LayoutDashboard,
    number: '01',
    title: 'Dashboards interativos',
    desc: 'Painéis visuais e acionáveis que respondem às perguntas certas em tempo real.',
    tag: 'Visualização',
  },
  {
    icon: Database,
    number: '02',
    title: 'Modelagem de dados',
    desc: 'Estruturas otimizadas em estrela, com relacionamentos robustos e performance alta.',
    tag: 'Arquitetura',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'ETL & integrações',
    desc: 'Pipelines que unificam ERP, CRM, planilhas e APIs em uma fonte única da verdade.',
    tag: 'Integração',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Automação de relatórios',
    desc: 'Entregas automáticas para stakeholders no formato e horário certos, sem esforço manual.',
    tag: 'Operação',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Governança & segurança',
    desc: 'RLS, versionamento e controle granular para proteger o ativo mais estratégico: seus dados.',
    tag: 'Segurança',
  },
  {
    icon: GraduationCap,
    number: '06',
    title: 'Treinamento & consultoria',
    desc: 'Capacitamos seu time para operar, evoluir e extrair o máximo da sua stack de BI.',
    tag: 'Capacitação',
  },
];

const SMOOTH = [0.22, 1, 0.36, 1] as const;

const stackReveal: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.88, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.8, ease: SMOOTH },
  },
};

const minimalReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 1, rotateX: 0 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.65, ease: SMOOTH },
  },
};

const stackStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const minimalStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

export function ServicesSection() {
  const isMobile = useIsMobile();
  const cardVariants = isMobile ? stackReveal : minimalReveal;
  const containerVariants = isMobile ? stackStagger : minimalStagger;
  return (
    <section id="servicos" className="relative overflow-hidden bg-brand-black py-28 lg:min-h-[820px]">
      <div className="perspective-grid opacity-30" />
      <motion.img
        src={asset('maoia1.webp')}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: SMOOTH }}
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
              className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
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
          variants={containerVariants}
          className="relative z-10 grid gap-7 sm:gap-8 [perspective:1400px] md:grid-cols-2 md:gap-5 lg:pr-[400px] xl:pr-[440px]"
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: SMOOTH } }}
              style={{ zIndex: services.length - idx, transformStyle: 'preserve-3d' }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-black/15 hover:shadow-[0_36px_72px_-24px_rgba(0,0,0,0.7)] sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-3 select-none font-heading text-[4.5rem] font-black leading-none text-black/[0.06] transition-all duration-700 group-hover:text-black/[0.12] sm:right-5 sm:top-4 sm:text-[5.5rem]"
              >
                {s.number}
              </span>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,0,0,0.06), transparent 40%)' }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] ring-1 ring-black/10 transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-105">
                  <s.icon size={24} strokeWidth={2.2} />
                  <span
                    aria-hidden
                    className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-sm bg-gradient-to-br from-neon to-neon-2 ring-1 ring-black/40"
                  />
                </div>

                <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-sm">
                  <span aria-hidden className="h-2 w-[2px] rounded-full bg-gradient-to-b from-black to-black/40" />
                  {s.tag}
                </span>
              </div>

              <h3 className="relative mt-6 font-heading text-xl font-semibold text-black sm:text-[1.35rem]">
                {s.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-black/60">{s.desc}</p>

              <div className="relative mt-7 flex items-center justify-between">
                <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-black/5">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/3 origin-left scale-x-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-transform duration-[900ms] ease-out group-hover:scale-x-[3]"
                  />
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-4 shrink-0 -translate-x-1 text-black/40 transition-all duration-500 group-hover:translate-x-0 group-hover:text-black"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
