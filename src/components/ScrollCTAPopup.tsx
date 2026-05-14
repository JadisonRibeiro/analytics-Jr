import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '@/utils/contact';

const STORAGE_KEY = 'ajr-scroll-cta-shown';
const TRIGGER_RATIO = 0.45;
const MIN_DELAY_MS = 12000;

export function ScrollCTAPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return;

    const mountedAt = Date.now();
    let armed = true;

    const onScroll = () => {
      if (!armed) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const ratio = window.scrollY / scrollable;
      const elapsed = Date.now() - mountedAt;
      if (ratio >= TRIGGER_RATIO && elapsed >= MIN_DELAY_MS) {
        armed = false;
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, '1');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="scroll-cta-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="scroll-cta-title"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-1 via-brand-black to-gray-1 p-8 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(192,192,192,0.18),transparent_60%)]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(192,192,192,0.12),transparent_60%)]" />
            <motion.div
              aria-hidden
              initial={{ x: '-120%' }}
              animate={{ x: '120%' }}
              transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg]"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-neon">
                <Sparkles size={12} className="text-neon" />
                Diagnóstico gratuito
              </span>

              <h2
                id="scroll-cta-title"
                className="mt-5 font-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-white"
              >
                Cansado de decidir
                <br />
                <span className="text-gradient-wg">no escuro?</span>
              </h2>

              <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-gray-5 sm:text-base">
                Em 30 minutos, mapeamos onde seus dados estão travando o crescimento — e o caminho mais
                curto para virar esse jogo. Sem custo, sem compromisso.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/75">
                {['Análise da sua operação atual', 'Plano de ação personalizado', 'Sem compromisso de contratação'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neon/40 bg-neon/10"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                      </span>
                      {item}
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.14em] text-brand-black transition hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.4)]"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Quero meu diagnóstico
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  Agora não
                </button>
              </div>

              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/35">
                Resposta em até 24h • Atendimento humano
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
