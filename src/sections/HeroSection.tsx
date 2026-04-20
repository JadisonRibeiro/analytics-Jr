import { motion } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/Button';
import { fadeUp, stagger } from '@/utils/animations';
import { asset } from '@/utils/asset';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-brand-black pt-32 pb-20"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60 [filter:saturate(1.15)_contrast(1.08)]"
      >
        <source src={asset('hero.mp4')} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.5)_80%,rgba(10,10,10,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-brand-black" />

      <div className="relative mx-auto flex w-full max-w-[980px] flex-col items-center px-6 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center">
          <motion.div
            variants={fadeUp}
            className="relative mb-10 flex flex-col items-center justify-center gap-5"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-black/60 blur-3xl" />
            <img
              src={asset('Logo_hero.png')}
              alt="Analytics JR"
              className="h-36 w-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.85)] sm:h-48 md:h-56 lg:h-64"
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-black uppercase leading-[1.15] tracking-normal text-gradient-wg sm:leading-[1.02] sm:tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 5.2vw, 4.25rem)' }}
          >
            Transformando dados
            <br className="hidden sm:block" />
            <span className="text-white"> em decisões</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[620px] text-base leading-relaxed text-gray-5 sm:text-lg"
          >
            Dashboards estratégicos em Power BI que revelam insights ocultos e impulsionam o crescimento do seu negócio com precisão analítica.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#cta">
              <Button icon={<ArrowRight size={16} />}>Começar projeto</Button>
            </a>
            <a href="#dashboards">
              <Button variant="ghost" icon={<BarChart3 size={16} />}>
                Ver dashboards
              </Button>
            </a>
          </motion.div>

        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-gray-5">
        Role para explorar
      </div>
    </section>
  );
}
