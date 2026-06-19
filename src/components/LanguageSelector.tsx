import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LANGUAGES, type Language } from '@/i18n/translations';
import { Flag } from '@/i18n/Flag';

interface Props {
  variant?: 'header' | 'mobile';
}

export function LanguageSelector({ variant = 'header' }: Props) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (code: Language) => {
    setLang(code);
    setOpen(false);
  };

  const isMobile = variant === 'mobile';

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.languageSelector.label}
        className={
          isMobile
            ? 'flex w-full items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-left text-white transition hover:bg-white/[0.08]'
            : 'flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white transition hover:border-white/35 hover:bg-white/[0.1]'
        }
      >
        <span className="flex items-center gap-2">
          <Flag code={current.code} className={isMobile ? 'h-4 w-[22px] rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.35)] ring-1 ring-black/10' : 'h-[14px] w-[20px] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.35)] ring-1 ring-black/10'} />
          <span className={isMobile ? 'text-sm' : 'text-[12px] uppercase tracking-[0.1em]'}>
            {isMobile ? current.label : current.code.toUpperCase()}
          </span>
        </span>
        <ChevronDown
          size={isMobile ? 16 : 13}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={
              isMobile
                ? 'mt-2 overflow-hidden rounded-2xl border border-white/15 bg-brand-black/95 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.6)] backdrop-blur'
                : 'absolute right-0 top-[calc(100%+8px)] z-[60] w-44 overflow-hidden rounded-2xl border border-white/15 bg-brand-black/95 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)] backdrop-blur'
            }
          >
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => choose(l.code)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition ${
                      active ? 'bg-white/[0.08] text-white' : 'text-white/85 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Flag code={l.code} />
                      <span>{l.label}</span>
                    </span>
                    {active && <Check size={14} className="text-white" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
