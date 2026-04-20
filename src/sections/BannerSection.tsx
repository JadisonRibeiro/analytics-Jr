import { motion } from 'framer-motion';
import { viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

export function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      <WaveDivider position="top" />
      <WaveDivider position="bottom" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-black/60 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-black opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-black" />
            </span>
            Analytics JR
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto mt-6 max-w-[820px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-black"
          >
            A força dos dados
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-black via-black/70 to-black/40 bg-clip-text text-transparent">
              ao seu alcance.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-6 max-w-[620px] text-lg leading-relaxed text-black/65"
          >
            Transformamos números em clareza estratégica — para que cada decisão seja sustentada por evidência, velocidade e visão de futuro.
          </motion.p>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative mt-4 w-full"
      >
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: [0, 0.6, 0], scale: [0.8, 1.1, 1.2] }}
          viewport={viewportOnce}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.18),transparent_70%)] blur-3xl"
        />

        <div className="relative mx-auto block w-full max-w-[1560px] overflow-hidden px-4 sm:px-8">
          <img
            src={asset('Banner.webp')}
            alt="Analytics JR"
            width={3000}
            height={1306}
            decoding="async"
            loading="eager"
            className="block h-auto w-full"
          />
          <motion.div
            aria-hidden
            initial={{ x: '-130%', opacity: 0 }}
            whileInView={{ x: '130%', opacity: [0, 0.8, 0] }}
            viewport={viewportOnce}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.6 }}
            className="pointer-events-none absolute inset-y-4 left-4 right-4 sm:inset-y-6 sm:left-6 sm:right-6"
            style={{
              background:
                'linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function WaveDivider({ position }: { position: 'top' | 'bottom' }) {
  const isTop = position === 'top';
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-0 right-0 z-10 h-[80px] sm:h-[110px] ${
        isTop ? 'top-[-1px]' : 'bottom-[-1px] rotate-180'
      }`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <motion.path
          fill="#000"
          initial={{ opacity: 0.95 }}
          animate={{
            d: [
              'M0,0 L1440,0 L1440,60 C1200,110 960,20 720,60 C480,100 240,30 0,70 Z',
              'M0,0 L1440,0 L1440,70 C1200,30 960,100 720,50 C480,10 240,90 0,50 Z',
              'M0,0 L1440,0 L1440,50 C1200,90 960,10 720,70 C480,110 240,20 0,80 Z',
              'M0,0 L1440,0 L1440,60 C1200,110 960,20 720,60 C480,100 240,30 0,70 Z',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
