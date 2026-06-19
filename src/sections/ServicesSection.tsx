import { motion, type Variants } from 'framer-motion';
import {
  ArrowUpRight,
  LayoutDashboard,
  Boxes,
  Workflow,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { useLanguage } from '@/i18n/LanguageContext';

const SERVICE_ICONS: LucideIcon[] = [
  LayoutDashboard,
  Boxes,
  Workflow,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

export function ServicesSection() {
  const { t } = useLanguage();
  const services = t.services.items.map((s, idx) => ({
    Icon: SERVICE_ICONS[idx],
    title: s.title,
    desc: s.desc,
    tag: s.tag,
  }));

  return (
    <section id="servicos" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative z-10 mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow text-gray-5">{t.services.eyebrow}</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            {t.services.title1}
            <br className="hidden sm:block" />
            {t.services.title2}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-[640px] text-lg text-gray-5">
            {t.services.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={cardStagger}
          className="relative z-10 mx-auto grid max-w-[1140px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {services.map(({ Icon, title, desc, tag }, idx) => (
            <motion.article
              key={idx}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: SMOOTH } }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.14] bg-gradient-to-b from-white/[0.10] to-white/[0.05] p-7 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-white/35 hover:from-white/[0.16] hover:to-white/[0.08] hover:shadow-[0_30px_70px_-24px_rgba(0,0,0,1)] sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-white/60 via-white/25 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.10] text-white transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/[0.16]">
                <Icon size={22} strokeWidth={1.6} />
              </div>

              <span className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                {tag}
              </span>

              <h3 className="mt-3 font-heading text-xl font-semibold text-white sm:text-[1.3rem]">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">{desc}</p>

              <div className="mt-auto flex items-center justify-between pt-8">
                <div className="relative h-px w-full overflow-hidden rounded-full bg-white/10">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/3 origin-left scale-x-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:scale-x-[3]"
                  />
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-4 shrink-0 -translate-x-1 text-white/40 transition-all duration-500 group-hover:translate-x-0 group-hover:text-white"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
