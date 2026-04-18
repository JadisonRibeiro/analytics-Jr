import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '@/assets/WhatsAppIcon';
import { whatsappUrl } from '@/utils/contact';

export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <AnimatePresence>
            {hover && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="hidden rounded-full bg-brand-black px-4 py-2 text-xs font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] md:inline-block"
              >
                Fale conosco no WhatsApp
              </motion.span>
            )}
          </AnimatePresence>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-magnetic
            aria-label="Fale conosco no WhatsApp"
            className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-105"
            style={{ background: '#25D366' }}
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full opacity-40" style={{ background: '#25D366' }} />
            <WhatsAppIcon size={26} className="text-white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
