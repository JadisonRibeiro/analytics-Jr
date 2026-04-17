import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const NAME = 'ANALYTICS JR';
const TAGLINE = 'Transformando dados em decisões';
const TOTAL_DURATION = 3200;

export function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const raw = Math.min(1, (now - start) / TOTAL_DURATION);
      const eased = 1 - Math.pow(1 - raw, 2.2);
      setProgress(eased);
      if (raw < 1) raf = requestAnimationFrame(tick);
      else {
        setDone(true);
        setTimeout(onComplete, 680);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3,
        size: 1 + Math.random() * 2,
      })),
    [],
  );

  const ringCircumference = 2 * Math.PI * 96;
  const percent = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.08 }}
          transition={{ duration: 0.68, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-brand-black"
        >
          <motion.div
            aria-hidden
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09),rgba(192,192,192,0.04)_40%,transparent_70%)] blur-2xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />

          <div aria-hidden className="pointer-events-none absolute inset-0">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ y: '110vh', opacity: 0 }}
                animate={{ y: '-10vh', opacity: [0, 0.7, 0.7, 0] }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  left: `${p.left}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="absolute rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-12 px-6">
            <div className="relative flex h-[240px] w-[240px] items-center justify-center">
              <motion.svg
                viewBox="0 0 220 220"
                className="absolute inset-0"
                aria-hidden
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: -90 + progress * 90, opacity: 1 }}
                transition={{ opacity: { duration: 0.8 } }}
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#C0C0C0" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <circle
                  cx="110"
                  cy="110"
                  r="96"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="96"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringCircumference * (1 - progress)}
                  style={{ transition: 'stroke-dashoffset 0.08s linear' }}
                />
              </motion.svg>

              <motion.div
                aria-hidden
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              </motion.div>

              <motion.div
                aria-hidden
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3"
              >
                <div className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
              </motion.div>

              <motion.img
                src="/Logo_Branca.png"
                alt="Analytics JR"
                initial={{ scale: 0.6, opacity: 0, filter: 'blur(18px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-36 w-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]"
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-[0.32em] font-heading text-sm font-medium tracking-[0.42em] text-white sm:text-base">
                {NAME.split('').map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                    animate={{
                      opacity: progress > 0.22 ? 1 : 0,
                      y: progress > 0.22 ? 0 : 14,
                      filter: progress > 0.22 ? 'blur(0px)' : 'blur(6px)',
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.45 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: progress > 0.55 ? 0.85 : 0, y: progress > 0.55 ? 0 : 8 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] uppercase tracking-[0.32em] text-white/50"
              >
                {TAGLINE}
              </motion.div>
            </div>

            <div className="flex w-72 flex-col items-center gap-3">
              <div className="relative h-[1px] w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/40 via-white to-white/40"
                  style={{ width: `${progress * 100}%` }}
                />
                <motion.div
                  aria-hidden
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]"
                  style={{ left: `calc(${progress * 100}% - 4px)` }}
                />
              </div>
              <div className="flex w-full items-center justify-between text-[9px] uppercase tracking-[0.42em] text-white/40">
                <span>Inicializando</span>
                <span className="tabular-nums text-white/70">
                  {percent.toString().padStart(3, '0')}
                </span>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
