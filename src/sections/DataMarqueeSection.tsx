import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

interface MarqueeRowProps {
  words: string[];
  baseVelocity: number;
  tilt: number;
  active: boolean;
}

function MarqueeRow({ words, baseVelocity, tilt, active }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 60, stiffness: 420 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (!active) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  const repeated = [...words, ...words];

  return (
    <div
      className="pointer-events-none relative w-[140%] -ml-[20%] overflow-hidden"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap gap-10 sm:gap-14"
      >
        {repeated.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center gap-10 font-heading text-[clamp(2.25rem,6.5vw,5.5rem)] font-black uppercase tracking-tight text-transparent sm:gap-14"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
          >
            {w}
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-neon/70 sm:h-2 sm:w-2"
              style={{ WebkitTextStroke: '0' }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

interface DataMarqueeSectionProps {
  wordsA: string[];
  wordsB: string[];
  speed?: number;
}

export function DataMarqueeSection({ wordsA, wordsB, speed = 3 }: DataMarqueeSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => setActive(entries[0]?.isIntersecting ?? false),
      { rootMargin: '100px 0px' },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden
      className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-brand-black py-16 sm:min-h-[320px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.1),transparent_70%)] blur-2xl" />

      <div className="relative flex w-full flex-col items-center justify-center gap-1 sm:gap-2">
        <MarqueeRow words={wordsA} baseVelocity={-speed} tilt={-10} active={active} />
        <MarqueeRow words={wordsB} baseVelocity={speed} tilt={10} active={active} />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-black to-transparent" />
    </section>
  );
}
