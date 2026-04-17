import { motion } from 'framer-motion';
import { Brain, RefreshCw, Network } from 'lucide-react';
import { cardReveal, fadeUp, staggerFast, stagger, viewportOnce } from '@/utils/animations';

const pains = [
  {
    icon: Brain,
    title: 'Decisões no achismo',
    desc: 'Você toma decisões baseado em intuição, não em evidências. Cada escolha vira um risco que poderia ser evitado.',
  },
  {
    icon: RefreshCw,
    title: 'Relatórios desatualizados',
    desc: 'Planilhas que levam horas para montar e chegam tarde demais. Quando os números ficam prontos, o momento já passou.',
  },
  {
    icon: Network,
    title: 'Dados desconectados',
    desc: 'CRM, ERP e marketing falam línguas diferentes. A visão única do negócio simplesmente não existe.',
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="relative overflow-hidden bg-brand-black py-28 lg:min-h-[820px]">
      <div className="perspective-grid opacity-40" />
      <motion.img
        src="/cubo.webp"
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
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
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
          variants={staggerFast}
          className="grid gap-6 [perspective:1200px] md:grid-cols-3 lg:grid-cols-1 lg:pl-[520px] xl:pl-[580px]"
        >
          {pains.map((p) => (
            <motion.div
              key={p.title}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-black/10 hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-black/[0.03] blur-2xl transition-all duration-700 group-hover:bg-black/[0.06]" />
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={viewportOnce}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.25 }}
                className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.04] ring-1 ring-black/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:bg-black/[0.08]"
              >
                <p.icon size={22} className="text-black" />
              </motion.div>
              <h3 className="relative mt-6 font-heading text-xl font-semibold text-black">{p.title}</h3>
              <p className="relative mt-3 leading-relaxed text-black/60">{p.desc}</p>
              <div className="relative mt-8 h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
