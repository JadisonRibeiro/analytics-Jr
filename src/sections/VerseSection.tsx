import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { viewportOnce } from '@/utils/animations';

export function VerseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-[820px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-100"
        >
          <Heart size={20} className="fill-rose-500 text-rose-500" strokeWidth={1.5} />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-heading text-[clamp(1.4rem,2.6vw,2rem)] font-medium italic leading-[1.35] text-black/85"
        >
          “Olho nenhum viu, ouvido nenhum ouviu, mente nenhuma imaginou o que Deus preparou para aqueles que o amam.”
        </motion.blockquote>

        <motion.cite
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-6 text-sm not-italic uppercase tracking-[0.32em] text-black/55"
        >
          1 Coríntios 2:9
        </motion.cite>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 h-px w-20 bg-black/15"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="mt-8 inline-flex items-center gap-2 text-sm text-black/70"
        >
          Esta empresa ama Jesus
          <Heart size={14} className="fill-rose-500 text-rose-500" strokeWidth={0} />
        </motion.p>
      </div>
    </section>
  );
}
