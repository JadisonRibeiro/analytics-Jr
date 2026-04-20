import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { FuturePulse } from '@/components/FuturePulse';

export function VisionSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const cardRadius = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 40, 40, 80]);

  return (
    <section ref={ref} className="relative bg-brand-black py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.div
          style={{ borderRadius: cardRadius }}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFAF8] to-[#F0F0EC] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-black/[0.04]"
        >
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.04),transparent_65%)]" />

          <div className="relative grid items-stretch gap-10 p-5 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:p-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-black/60"
              >
                <Sparkles size={12} className="text-black/70" />
                Nossa visão
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 font-heading text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[1.15] tracking-normal sm:leading-[0.98] sm:tracking-[-0.02em] text-black"
              >
                O futuro
                <br className="hidden sm:block" />
                é orientado
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-black via-black/70 to-black/40 bg-clip-text text-transparent">
                  por dados.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-[520px] text-lg leading-relaxed text-black/70"
              >
                Empresas que tomam decisão com evidência superam, em média, 5× as que operam por intuição. Nosso trabalho é encurtar a distância entre o que os seus dados já sabem e o que o seu time decide amanhã.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { k: 'Evidência', v: 'Zero achismo na mesa de decisão.' },
                  { k: 'Velocidade', v: 'Insight disponível em minutos.' },
                  { k: 'Precisão', v: 'Modelagem validada ponta a ponta.' },
                  { k: 'Escala', v: 'Pipelines que crescem com você.' },
                ].map((b, i) => (
                  <motion.div
                    key={b.k}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-black/[0.06] bg-white/70 p-4 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.3)]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.28em] text-black/50">{b.k}</div>
                    <div className="mt-2 text-sm leading-snug text-black/80">{b.v}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                variants={fadeUp}
                href="#cta"
                data-magnetic
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-black/85"
              >
                Conversar com um especialista
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent_70%)] blur-2xl" />
              <FuturePulse />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-5 grid grid-cols-2 overflow-hidden rounded-2xl bg-black text-white shadow-[0_24px_48px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,166,0.18),transparent_60%)]" />
                <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                <div className="relative flex flex-col items-start gap-1 px-5 py-4 sm:px-7 sm:py-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">Impacto</span>
                  <span className="font-heading text-2xl font-bold leading-none sm:text-[1.65rem]">
                    <span className="bg-gradient-to-r from-white to-[#5EEAD4] bg-clip-text text-transparent">+340%</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">receita destravada</span>
                </div>

                <div className="relative flex flex-col items-start gap-1 px-5 py-4 sm:px-7 sm:py-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">Tempo médio</span>
                  <span className="font-heading text-2xl font-bold leading-none sm:text-[1.65rem]">6 semanas</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">do go-live ao insight</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
