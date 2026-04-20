import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';

const faqs = [
  {
    q: 'Quanto tempo leva para o primeiro dashboard ficar pronto?',
    a: 'Na maioria dos projetos, o primeiro dashboard funcional é entregue entre 2 e 4 semanas. Em paralelo executamos o diagnóstico e mapeamento, para que a partir do go-live as evoluções aconteçam em ciclos semanais.',
  },
  {
    q: 'Minha empresa é pequena. Faz sentido investir em BI agora?',
    a: 'Sim — justamente porque decidir no achismo custa mais caro em operações enxutas. Começamos com um escopo mínimo viável, focado em 1 ou 2 KPIs que destravam caixa ou receita, e evoluímos a partir do resultado.',
  },
  {
    q: 'Quais fontes de dados vocês integram?',
    a: 'Trabalhamos com ERPs (TOTVS, SAP, Oracle, Protheus), CRMs (Salesforce, HubSpot, Pipedrive), bancos relacionais (SQL Server, PostgreSQL, MySQL), planilhas, APIs REST e ferramentas de marketing (Google Ads, Meta, GA4).',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Adotamos RLS (row-level security), criptografia em trânsito e repouso, e toda a arquitetura é desenhada sob premissas de governança e LGPD. Acordos de confidencialidade fazem parte do onboarding.',
  },
  {
    q: 'Preciso ter time técnico interno para manter os dashboards?',
    a: 'Não. Entregamos soluções que funcionam "chave na mão" e treinamos o seu time para operar. Se desejar, temos planos de sustentação mensal em que cuidamos da evolução continuamente.',
  },
  {
    q: 'Como funciona a precificação na prática?',
    a: 'Os planos Starter e Pro são mensalidade fixa (com desconto no anual). O Enterprise é sob consulta, pois varia conforme volume, SLA e squad dedicado. Nunca cobramos por usuário.',
  },
  {
    q: 'Trabalham com empresas fora do Brasil?',
    a: 'Sim, atendemos clientes em toda a América Latina e em Portugal. Dashboards podem ser entregues em português, inglês ou espanhol, com suporte ao fuso local.',
  },
  {
    q: 'E se eu já tiver Power BI, mas estiver mal implementado?',
    a: 'Esse é um cenário comum. Iniciamos com uma auditoria técnica e estratégica, identificamos gargalos (modelo, performance, UX) e desenhamos um plano de reestruturação incremental — sem precisar recomeçar do zero.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-brand-black py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(192,192,192,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-[960px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-12 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">FAQ</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[640px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            Dúvidas frequentes.
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
