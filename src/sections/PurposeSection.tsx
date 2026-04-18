import { motion } from 'framer-motion';
import { Compass, Eye, HeartHandshake } from 'lucide-react';
import { cardReveal, fadeUp, stagger, staggerFast, viewportOnce } from '@/utils/animations';
import { asset } from '@/utils/asset';

const pillars = [
  {
    icon: Compass,
    image: '/clareza.jpg',
    title: 'Clareza antes de complexidade',
    desc: 'Dashboard bonito não resolve negócio. Entregamos a resposta certa no formato mais simples possível — para que a decisão aconteça em segundos, não em reuniões.',
  },
  {
    icon: Eye,
    image: '/visao.jpg',
    title: 'Visão que vira ação',
    desc: 'Traduzimos dados brutos em movimento: cada indicador conecta-se a uma decisão concreta, a uma pessoa responsável e a um próximo passo claro.',
  },
  {
    icon: HeartHandshake,
    image: '/parceria.jpg',
    title: 'Parceria de longo prazo',
    desc: 'Não entregamos e sumimos. Permanecemos ao lado do seu time para evoluir modelos, abrir novas perguntas e multiplicar o valor do dado ao longo do tempo.',
  },
];

export function PurposeSection() {
  return (
    <section id="proposito" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto mb-20 max-w-[880px] text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">
            Nosso propósito
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-gradient-wg"
          >
            Existimos para transformar
            <br className="hidden sm:block" />
            dados em decisões melhores.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-[720px] text-lg leading-relaxed text-gray-5"
          >
            Acreditamos que toda empresa carrega, dentro dos próprios dados, as respostas para crescer com mais consistência. Nosso trabalho é revelar essas respostas com rigor técnico e sensibilidade de negócio — entregando não apenas painéis, mas uma nova forma de enxergar e conduzir a operação.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-black/10 hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-64 overflow-hidden bg-[#f5f5f2]">
                <img
                  src={asset(p.image)}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-black/10 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)]">
                  <p.icon size={22} className="text-black" />
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-black/[0.03] blur-2xl transition-all duration-700 group-hover:bg-black/[0.06]" />
                <h3 className="relative font-heading text-xl font-semibold text-black">{p.title}</h3>
                <p className="relative mt-3 leading-relaxed text-black/60">{p.desc}</p>
                <div className="relative mt-8 h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
