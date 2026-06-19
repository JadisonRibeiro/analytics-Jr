import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { useLanguage } from '@/i18n/LanguageContext';

const PHOTOS = ['/Jadison.webp', '/Raiany.webp'];

export function TeamSection() {
  const { t } = useLanguage();
  return (
    <section id="team" className="relative overflow-hidden bg-brand-black py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto max-w-[680px] text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.12] tracking-normal sm:leading-[1.02] sm:tracking-[-0.02em] text-white"
          >
            {t.team.title1}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-white/70 to-white/40 bg-clip-text text-transparent">
              {t.team.title2}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed text-white/60"
          >
            {t.team.description}
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-[1000px] gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-10">
          {t.team.members.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white/[0.03] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:ring-white/20"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={PHOTOS[i]}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">
                    {m.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 backdrop-blur">
                    {m.role}
                  </span>
                </div>
              </div>

              <p className="px-6 py-6 text-[15px] leading-relaxed text-white/60 sm:px-7 sm:py-7">
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
