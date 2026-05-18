import { useEffect, useState } from 'react';

export function useScrollAnimation(threshold = 50, hysteresis = 16): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const y = window.scrollY;
        if (!prev && y > threshold) return true;
        if (prev && y < threshold - hysteresis) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, hysteresis]);
  return scrolled;
}
