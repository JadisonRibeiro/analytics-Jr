import { motion, type Variants } from 'framer-motion';
import { Brain, RefreshCw, Network, ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';
import { useIsMobile } from '@/utils/useIsMobile';

const pains = [
  {
    icon: Brain,
    number: '01',
    title: 'Decisões no achismo',
    desc: 'Você toma decisões baseado em intuição, não em evidências. Cada escolha vira um risco que poderia ser evitado.',
    impact: 'Risco invisível',
  },
  {
    icon: RefreshCw,
    number: '02',
    title: 'Relatórios desatualizados',
    desc: 'Planilhas que levam horas para montar e chegam tarde demais. Quando os números ficam prontos, o momento já passou.',
    impact: 'Tempo perdido',
  },
  {
    icon: Network,
    number: '03',
    title: 'Dados desconectados',
    desc: 'CRM, ERP e marketing falam línguas diferentes. A visão única do negócio simplesmente não existe.',
    impact: 'Visão fragmentada',
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
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

const minimalStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function ProblemSection() {
  const isMobile = useIsMobile();
  const cardVariants = isMobile ? stackReveal : minimalReveal;
  const containerVariants = isMobile ? stackStagger : minimalStagger;

  return (
    <section id="problema" className="relative overflow-hidden bg-brand-black py-28 lg:min-h-[820px]">
      <div className="perspective-grid opacity-40" />
      <motion.img
        src={asset('cubo.webp')}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[620px] w-auto max-w-[40vw] -translate-y-1/2 object-contain object-left drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(192,192,192,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative z-10 mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow text-gray-5">
            O problema
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            Seus dados estão em todo lugar.
            <br className="hidden sm:block" />
            Suas decisões em lugar nenhum.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-[680px] text-lg text-gray-5">
            Três sintomas que silenciosamente corroem o crescimento de empresas que ainda tratam dados como um item do checklist.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid gap-7 sm:gap-8 [perspective:1400px] md:grid-cols-3 md:gap-6 lg:grid-cols-1 lg:gap-6 lg:pl-[520px] xl:pl-[580px]"
        >
          {pains.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: SMOOTH } }}
              style={{ zIndex: pains.length - idx, transformStyle: 'preserve-3d' }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-black/15 hover:shadow-[0_36px_72px_-24px_rgba(0,0,0,0.7)] sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-3 select-none font-heading text-[4.5rem] font-black leading-none text-black/[0.06] transition-all duration-700 group-hover:text-black/[0.12] sm:right-5 sm:top-4 sm:text-[5.5rem]"
              >
                {p.number}
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
                  <p.icon size={24} strokeWidth={2.2} />
                  <span
                    aria-hidden
                    className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-sm bg-gradient-to-br from-neon to-neon-2 ring-1 ring-black/40"
                  />
                </div>

                <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-sm">
                  <span aria-hidden className="h-2 w-[2px] rounded-full bg-gradient-to-b from-black to-black/40" />
                  {p.impact}
                </span>
              </div>

              <h3 className="relative mt-6 font-heading text-xl font-semibold text-black sm:text-[1.35rem]">
                {p.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-black/60">{p.desc}</p>

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
