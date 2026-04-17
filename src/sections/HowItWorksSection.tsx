import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Imersão no seu negócio: mapeamos fontes, KPIs prioritários e o cenário atual de tomada de decisão.',
    bullets: ['Workshop estratégico', 'Auditoria de dados', 'Priorização de KPIs'],
  },
  {
    n: '02',
    title: 'Construção',
    desc: 'Modelagem, ETL e desenvolvimento dos dashboards em Power BI com sprints semanais e validação contínua.',
    bullets: ['Modelo estrela otimizado', 'Pipelines automatizados', 'UX refinado'],
  },
  {
    n: '03',
    title: 'Evolução',
    desc: 'Treinamento do time, monitoria e ciclo de melhoria contínua para que os dashboards evoluam com a operação.',
    bullets: ['Onboarding dos usuários', 'Governança ativa', 'Suporte dedicado'],
  },
];

export function HowItWorksSection() {
  const lineRef = useRef<SVGLineElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!lineRef.current || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        },
      );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="processo" className="relative overflow-hidden bg-brand-black py-28">
        {videoReady && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 [filter:saturate(1.15)_contrast(1.08)]"
          >
            <source src={asset('hero.mp4')} type="video/mp4" />
          </video>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.25)_0%,rgba(10,10,10,0.55)_70%,rgba(10,10,10,0.8)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="mb-20 max-w-[720px]"
          >
            <motion.span variants={fadeUp} className="eyebrow text-gray-5">Como funciona</motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
            >
              Um processo em três fases,
              <br className="hidden sm:block" />
              desenhado para entregar impacto.
            </motion.h2>
          </motion.div>

          <div ref={wrapRef} className="relative">
            <svg
              aria-hidden
              className="pointer-events-none absolute left-[34px] top-0 hidden h-full md:block"
              width="4"
              viewBox="0 0 4 1000"
              preserveAspectRatio="none"
            >
              <line
                ref={lineRef}
                x1="2"
                y1="0"
                x2="2"
                y2="1000"
                stroke="#C0C0C0"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
            </svg>

            <div className="space-y-14">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="grid items-start gap-6 md:grid-cols-[72px_1fr]"
                >
                  <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-black ring-2 ring-white/20">
                    <span className="font-heading text-lg font-bold text-white">{s.n}</span>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
                    <h3 className="font-heading text-2xl font-semibold text-black">{s.title}</h3>
                    <p className="mt-3 max-w-[640px] text-lg text-black/60">{s.desc}</p>
                    <ul className="mt-6 flex flex-wrap gap-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-black/60"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
