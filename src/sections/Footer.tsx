import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '@/assets/WhatsAppIcon';
import { asset } from '@/utils/asset';
import { INSTAGRAM, whatsappUrl, emailUrl, EMAIL, PHONE_DISPLAY } from '@/utils/contact';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-brand-black pt-20 pb-10 text-gray-5">
      <div className="perspective-grid opacity-40" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={asset('Logo_Branca.png')}
                alt="Analisa Jr"
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
              />
              <div className="font-heading text-lg font-semibold uppercase tracking-[0.3em] text-white">
                Analisa Jr
              </div>
            </div>
            <p className="mt-5 max-w-[340px] text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <Instagram size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={emailUrl}
                aria-label="E-mail"
                data-magnetic
                className="rounded-full border border-white/15 p-2.5 text-gray-5 transition hover:border-white hover:bg-white hover:text-brand-black"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <FooterCol title={t.footer.nav} items={[
            { l: t.footer.navItems.home, h: '#home' },
            { l: t.footer.navItems.services, h: '#servicos' },
            { l: t.footer.navItems.cases, h: '#dashboards' },
            { l: t.footer.navItems.investment, h: '#investimento' },
          ]} />

          <FooterCol title={t.footer.company} items={[
            { l: t.footer.companyItems.testimonials, h: '#depoimentos' },
            { l: t.footer.companyItems.faq, h: '#faq' },
            { l: t.footer.companyItems.contact, h: '#cta' },
          ]} />

          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gray-4">{t.footer.contact}</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={emailUrl} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-white">
                  @analisa.jr
                </a>
              </li>
              <li>{t.footer.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <div className="text-gray-4">© {new Date().getFullYear()} Analisa Jr. {t.footer.rights}</div>
          <div className="flex items-center gap-6 text-gray-4">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 transition hover:border-white hover:text-white"
            >
              {t.footer.top} <ArrowUp size={12} />
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
