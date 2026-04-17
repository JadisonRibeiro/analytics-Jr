import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#dashboards', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const scrolled = useScrollAnimation(20);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <div
        className={`flex w-full max-w-[980px] items-center justify-between gap-6 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 ${
          scrolled
            ? 'border-white/15 bg-brand-black/80 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.65)]'
            : 'border-white/10 bg-white/[0.04] shadow-[0_10px_28px_-14px_rgba(0,0,0,0.55)]'
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 pl-1"
          aria-label="Analytics JR"
          data-magnetic
        >
          <img
            src="/Logo_Branca.png"
            alt=""
            className="h-8 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          />
          <span className="hidden font-heading text-xs font-semibold uppercase tracking-[0.28em] text-white sm:inline">
            Analytics JR
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-magnetic
              className="text-[13px] font-medium text-gray-5 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          data-magnetic
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[12.5px] font-medium text-brand-black transition hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-8px_rgba(255,255,255,0.35)] md:inline-flex"
        >
          Entrar em contato <ArrowRight size={13} />
        </a>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={18} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[60] bg-brand-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out" />
            <Dialog.Content className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-brand-black p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/Logo_Branca.png" alt="" className="h-8 w-auto" />
                  <Dialog.Title className="font-heading text-sm uppercase tracking-[0.28em] text-white">
                    Menu
                  </Dialog.Title>
                </div>
                <Dialog.Close asChild>
                  <button className="rounded-full border border-white/15 p-2 text-white" aria-label="Fechar">
                    <X size={18} />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-heading text-lg text-white transition hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-6 w-full"
              >
                Entrar em contato <ArrowRight size={14} />
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </motion.header>
  );
}
