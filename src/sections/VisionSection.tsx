import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

export function VisionSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
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

          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:p-20">
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
                className="mt-6 font-heading text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-black"
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
              viewport={viewportOnce}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent_70%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
                <motion.img
                  src={asset('Futuro.jpg')}
                  alt="Futuro orientado por dados"
                  loading="lazy"
                  style={{ y: imageY, scale: imageScale }}
                  className="block h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-75" />
                      <span className="relative h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/90">Vision • 2026</span>
                  </div>
                  <p className="mt-3 max-w-[360px] font-heading text-lg font-semibold text-white sm:text-xl">
                    Analytics como extensão natural da estratégia.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-6 -top-6 hidden rounded-2xl bg-black px-4 py-3 text-white shadow-[0_18px_36px_-12px_rgba(0,0,0,0.5)] sm:block"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/60">Impacto</div>
                <div className="mt-1 font-heading text-2xl font-bold">+340%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white px-4 py-3 text-black shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:block"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-black/50">Tempo médio</div>
                <div className="mt-1 font-heading text-2xl font-bold">6 semanas</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
