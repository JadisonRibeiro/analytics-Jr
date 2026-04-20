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
      className="pointer-events-none relative w-[140%] overflow-hidden"
      style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '50% 50%' }}
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap gap-5 sm:gap-10 md:gap-14"
      >
        {repeated.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center gap-5 font-heading text-[clamp(1.1rem,3.6vw,4rem)] font-black uppercase tracking-tight text-black sm:gap-10 md:gap-14"
          >
            {w}
            <span
              aria-hidden
              className="inline-block h-1 w-1 rounded-full bg-black/35 sm:h-1.5 sm:w-1.5"
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
      className="relative isolate flex min-h-[200px] items-center justify-center overflow-hidden bg-white py-10 sm:min-h-[260px] sm:py-14"
    >
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <div className="w-full -translate-x-[10%]">
          <MarqueeRow words={wordsA} baseVelocity={-speed} tilt={-12} active={active} />
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <div className="w-full -translate-x-[10%]">
          <MarqueeRow words={wordsB} baseVelocity={speed} tilt={12} active={active} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
    </section>
  );
}
