import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '@/assets/WhatsAppIcon';
import { asset } from '@/utils/asset';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-black pt-20 pb-10 text-gray-5">
      <div className="perspective-grid opacity-40" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={asset('Logo_Branca.png')}
                alt="Analytics JR"
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
              />
              <div className="font-heading text-lg font-semibold uppercase tracking-[0.3em] text-white">
                Analytics JR
              </div>
            </div>
            <p className="mt-5 max-w-[340px] text-sm leading-relaxed">
              Consultoria de analytics especializada em Power BI. Transformamos dados em decisão estratégica.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/analyticsjr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5591998361022"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href="mailto:data.analyticsjr@gmail.com"
                aria-label="E-mail"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <FooterCol title="Navegação" items={[
            { l: 'Início', h: '#home' },
            { l: 'Serviços', h: '#servicos' },
            { l: 'Cases', h: '#dashboards' },
            { l: 'Investimento', h: '#investimento' },
          ]} />

          <FooterCol title="Empresa" items={[
            { l: 'Depoimentos', h: '#depoimentos' },
            { l: 'FAQ', h: '#faq' },
            { l: 'Contato', h: '#cta' },
          ]} />

          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gray-4">Contato</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:data.analyticsjr@gmail.com" className="hover:text-white">
                  data.analyticsjr@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5591998361022" className="hover:text-white">
                  +55 91 99836-1022
                </a>
              </li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <div className="text-gray-4">© {new Date().getFullYear()} Analytics JR. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6 text-gray-4">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 transition hover:border-white hover:text-white"
            >
              Topo <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gray-4">{title}</div>
      <ul className="space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.h}>
            <a href={i.h} className="transition hover:text-white">{i.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
