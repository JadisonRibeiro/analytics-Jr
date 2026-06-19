import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { useLanguage } from '@/i18n/LanguageContext';

export function FaqSection() {
  const { t } = useLanguage();
  const faqs = t.faq.items;
  return (
    <section id="faq" className="relative overflow-hidden bg-brand-black py-28">
      <div className="relative mx-auto max-w-[960px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-12 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">{t.faq.eyebrow}</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[640px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            {t.faq.title}
          </motion.h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3" asChild>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
            }}
          >
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Accordion.Item
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-white transition hover:bg-white/[0.04]">
                      <span className="font-heading text-base font-medium sm:text-lg">{f.q}</span>
                      <Plus
                        size={18}
                        className="shrink-0 text-gray-5 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-white"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-gray-5 data-[state=closed]:animate-[accordion-up_0.3s_ease-out] data-[state=open]:animate-[accordion-down_0.3s_ease-out]">
                    <div className="px-6 pb-6 pr-16 leading-relaxed">{f.a}</div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </motion.div>
        </Accordion.Root>
      </div>
    </section>
  );
}
