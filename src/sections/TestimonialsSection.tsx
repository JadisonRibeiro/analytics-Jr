import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const items: Testimonial[] = [
  {
    quote: 'A Analytics JR traduziu o caos de 5 ERPs em um dashboard único. Nossa diretoria finalmente decide com dados na mão — e o impacto no resultado apareceu no primeiro trimestre.',
    name: 'Marina Rocha',
    role: 'CFO',
    company: 'Aurora Retail',
  },
  {
    quote: 'Esperava um relatório bonito. Ganhei uma ferramenta de decisão. Em 60 dias passamos a reagir ao mercado antes do concorrente.',
    name: 'Diego Arantes',
    role: 'Head of Growth',
    company: 'Luminar Tech',
    },
  {
    quote: 'Time sênior, processo limpo, entregas no prazo. Os dashboards viraram ritual diário do nosso comitê executivo.',
    name: 'Patrícia Leal',
    role: 'COO',
    company: 'Polaris Saúde',
  },
  {
    quote: 'O retorno veio rápido: 340% em 6 meses. Mais importante: passamos a operar com previsibilidade que nunca tivemos.',
    name: 'Rafael Medeiros',
    role: 'CEO',
    company: 'Vertex Indústria',
  },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setI((n) => (n + 1) % items.length);
  const prev = () => setI((n) => (n - 1 + items.length) % items.length);

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />
      <motion.img
        src={asset('cubo1.webp')}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-[38%] hidden h-[620px] w-auto max-w-[40vw] -translate-y-1/2 object-contain object-left drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">Depoimentos</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[720px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
          >
            Quem convive com os dados,
            <br className="hidden sm:block" />
            conta o que mudou.
          </motion.h2>
        </motion.div>

        <div
          className="relative mx-auto max-w-[860px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative cursor-grab overflow-hidden rounded-2xl border border-black/5 bg-white p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] active:cursor-grabbing sm:p-14"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/[0.03] blur-3xl" />
              <Quote size={34} className="text-black/15" />
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-black text-black" />
                ))}
              </div>
              <p className="relative mt-6 text-xl leading-relaxed text-black sm:text-2xl">
                {items[i].quote}
              </p>
              <div className="relative mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-heading text-sm font-bold text-white">
                  {items[i].name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <div className="font-heading font-semibold text-black">{items[i].name}</div>
                  <div className="text-sm text-black/60">
                    {items[i].role} • {items[i].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Anterior"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, j) => (
                <button
                  key={j}
                  aria-label={`Ir para depoimento ${j + 1}`}
                  onClick={() => setI(j)}
                  className={`h-1.5 rounded-full transition-all ${j === i ? 'w-8 bg-white' : 'w-4 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
