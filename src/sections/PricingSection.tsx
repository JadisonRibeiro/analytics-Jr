import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';

type Connector = {
  name: string;
  category: string;
  logo: string;
};

const connectors: Connector[] = [
  { name: 'SAP', category: 'ERP corporativo', logo: '/logos/sap.svg' },
  { name: 'SAP HANA', category: 'Banco em memória', logo: '/logos/sap.svg' },
  { name: 'Oracle', category: 'Banco relacional', logo: '/logos/oracle.svg' },
  { name: 'TOTVS Protheus', category: 'ERP nacional', logo: '/logos/totvs.svg' },
  { name: 'SQL Server', category: 'Microsoft', logo: '/logos/sqlserver.svg' },
  { name: 'PostgreSQL', category: 'Open-source', logo: '/logos/postgresql.svg' },
  { name: 'MySQL', category: 'Banco relacional', logo: '/logos/mysql.svg' },
  { name: 'MongoDB', category: 'Banco NoSQL', logo: '/logos/mongodb.svg' },
  { name: 'SharePoint', category: 'Microsoft 365', logo: '/logos/sharepoint.svg' },
  { name: 'Google Sheets', category: 'Planilhas em nuvem', logo: '/logos/googlesheets.svg' },
  { name: 'Excel', category: 'Planilhas locais', logo: '/logos/excel.svg' },
  { name: 'REST APIs', category: 'Integrações sob demanda', logo: '/logos/api.svg' },
];

function ConnectorPill({ c }: { c: Connector }) {
  return (
    <div className="mx-3 inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.07]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
        <img
          src={c.logo}
          alt={`Logotipo ${c.name}`}
          loading="lazy"
          className="h-6 w-6 object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-semibold text-white">{c.name}</span>
        <span className="text-[11px] uppercase tracking-wider text-gray-5">{c.category}</span>
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Connector[];
  reverse?: boolean;
  duration?: number;
}) {
  const animateX = reverse ? ['-50%', '0%'] : ['0%', '-50%'];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: animateX }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {[...items, ...items].map((c, i) => (
          <ConnectorPill key={`${c.name}-${i}`} c={c} />
        ))}
      </motion.div>
    </div>
  );
}

export function PricingSection() {
  const half = Math.ceil(connectors.length / 2);
  const rowA = connectors.slice(0, half);
  const rowB = connectors.slice(half);

  return (
    <section id="investimento" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center text-gray-5">
            Conexões
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[820px] font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            Conectamos seus dados
            <br className="hidden sm:block" />
            onde quer que eles estejam.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[640px] text-lg text-gray-5"
          >
            ERPs, bancos relacionais, planilhas e APIs — integramos as principais fontes do mercado em uma única base confiável, pronta para virar dashboard.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-5">
        <MarqueeRow items={rowA} duration={40} />
        <MarqueeRow items={rowB} duration={50} reverse />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-[560px] text-gray-5">
            Não vê sua fonte aqui? Conectamos praticamente qualquer sistema com API ou banco acessível.
          </p>
          <a
            href="#cta"
            data-magnetic
            className="btn btn-primary"
          >
            Conversar sobre integração
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
