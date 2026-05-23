import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';

function GuessworkArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="80" cy="108" rx="46" ry="4" fill="currentColor" stroke="none" opacity="0.08" />

      <g transform="rotate(-14 46 56)">
        <rect x="18" y="28" width="56" height="56" rx="10" fill="#fff" />
        <rect x="18" y="28" width="56" height="56" rx="10" />
        <path d="M37 47c0-6 4-10 9-10s9 4 9 10c0 5-3 7-6 9-2 1-3 3-3 5" />
        <circle cx="46" cy="69" r="1.8" fill="currentColor" stroke="none" />
      </g>

      <g transform="rotate(10 110 64)">
        <rect x="80" y="34" width="60" height="60" rx="10" fill="#fff" />
        <rect x="80" y="34" width="60" height="60" rx="10" />
        <path d="M100 55c0-6 4-10 10-10s10 4 10 10c0 5-3 7-7 10-2 1-3 3-3 6" />
        <circle cx="110" cy="79" r="2" fill="currentColor" stroke="none" />
      </g>

      <path d="M6 38l8 0M2 48l6 0M6 58l10 0" opacity="0.35" />
      <path d="M154 70l-8 0M158 80l-6 0M154 90l-10 0" opacity="0.35" />
    </svg>
  );
}

function OutdatedArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="80" cy="110" rx="34" ry="3.5" fill="currentColor" stroke="none" opacity="0.08" />

      <path d="M48 12h64" strokeWidth={3.2} />
      <path d="M48 108h64" strokeWidth={3.2} />

      <path d="M56 12v14c0 12 22 26 24 32M56 108V94c0-12 22-26 24-32" />
      <path d="M104 12v14c0 12-22 26-24 32M104 108V94c0-12-22-26-24-32" />

      <path d="M62 26h36c0 8-8 18-18 22-10-4-18-14-18-22z" fill="currentColor" stroke="none" opacity="0.85" />

      <path d="M80 60v18" strokeWidth={2.6} />

      <path d="M64 94c2-8 8-14 16-14s14 6 16 14z" fill="currentColor" stroke="none" opacity="0.85" />

      <circle cx="22" cy="40" r="1.5" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="138" cy="72" r="1.5" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="134" cy="44" r="1" fill="currentColor" stroke="none" opacity="0.3" />
      <circle cx="28" cy="78" r="1" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  );
}

function DisconnectedArt(props: SVGProps<SVGSVGElement>) {
  const cylinder = (x: number, y: number, h: number) => (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="18" cy="6" rx="18" ry="6" fill="#fff" />
      <path d={`M0 6v${h}c0 3.3 8 6 18 6s18-2.7 18-6V6`} fill="#fff" />
      <path d={`M0 6v${h}c0 3.3 8 6 18 6s18-2.7 18-6V6`} />
      <ellipse cx="18" cy="6" rx="18" ry="6" />
      <path d="M0 18c0 3.3 8 6 18 6s18-2.7 18-6" opacity="0.5" />
      <path d={`M0 ${Math.min(h - 6, 30)}c0 3.3 8 6 18 6s18-2.7 18-6`} opacity="0.3" />
    </g>
  );

  return (
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="80" cy="110" rx="62" ry="4" fill="currentColor" stroke="none" opacity="0.08" />

      {cylinder(8, 28, 46)}
      {cylinder(62, 16, 58)}
      {cylinder(116, 32, 42)}

      <path d="M50 50l10 0" strokeDasharray="3 4" opacity="0.6" />
      <path d="M100 56l12 0" strokeDasharray="3 4" opacity="0.6" />

      <g transform="translate(48 38)">
        <circle cx="6" cy="6" r="7" fill="#fff" />
        <circle cx="6" cy="6" r="7" />
        <path d="M3 3l6 6M9 3l-6 6" strokeWidth={2} />
      </g>
      <g transform="translate(102 44)">
        <circle cx="6" cy="6" r="7" fill="#fff" />
        <circle cx="6" cy="6" r="7" />
        <path d="M3 3l6 6M9 3l-6 6" strokeWidth={2} />
      </g>
    </svg>
  );
}

type Pain = {
  art: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  impact: string;
};

const pains: Pain[] = [
  {
    art: GuessworkArt,
    title: 'Decisões no achismo',
    desc: 'Você toma decisões baseado em intuição, não em evidências. Cada escolha vira um risco que poderia ser evitado.',
    impact: 'Risco invisível',
  },
  {
    art: OutdatedArt,
    title: 'Relatórios desatualizados',
    desc: 'Planilhas que levam horas para montar e chegam tarde demais. Quando os números ficam prontos, o momento já passou.',
    impact: 'Tempo perdido',
  },
  {
    art: DisconnectedArt,
    title: 'Dados desconectados',
    desc: 'CRM, ERP e marketing falam línguas diferentes. A visão única do negócio simplesmente não existe.',
    impact: 'Visão fragmentada',
  },
];

const SMOOTH = [0.22, 1, 0.36, 1] as const;

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SMOOTH },
  },
};

const cardStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function ProblemSection() {
  const cardVariants = cardReveal;
  const containerVariants = cardStagger;

  return (
    <section id="problema" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(192,192,192,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative z-10 mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">
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
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-[680px] text-lg text-gray-5">
            Três sintomas que silenciosamente corroem o crescimento de empresas que ainda tratam dados como um item do checklist.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={containerVariants}
          className="mx-auto grid max-w-[1100px] grid-cols-1 gap-7 sm:gap-8 md:grid-cols-3 md:gap-6"
        >
          {pains.map((p) => (
            <motion.article
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: SMOOTH } }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-black/15 hover:shadow-[0_36px_72px_-24px_rgba(0,0,0,0.7)] sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,0,0,0.06), transparent 40%)' }}
              />

              <div className="relative flex h-32 w-full items-center justify-center sm:h-36">
                <p.art
                  aria-hidden
                  className="h-full w-auto max-w-[180px] text-black transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-sm">
                  <span aria-hidden className="h-2 w-[2px] rounded-full bg-gradient-to-b from-black to-black/40" />
                  {p.impact}
                </span>
              </div>

              <h3 className="relative mt-4 text-center font-heading text-xl font-semibold text-black sm:text-[1.35rem]">
                {p.title}
              </h3>
              <p className="relative mt-3 text-center leading-relaxed text-black/60">{p.desc}</p>

              <div className="relative mt-auto flex items-center justify-between pt-7">
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
