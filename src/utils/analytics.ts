declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ContactMethod = 'whatsapp' | 'email' | 'instagram' | 'phone';

function track(method: ContactMethod, label: string) {
  window.gtag?.('event', 'generate_lead', {
    method,
    link_url: label,
  });
  window.gtag?.('event', `click_${method}`, {
    link_url: label,
  });
}

function detect(href: string): ContactMethod | null {
  const h = href.toLowerCase();
  if (h.includes('wa.me') || h.includes('whatsapp.com')) return 'whatsapp';
  if (h.startsWith('mailto:')) return 'email';
  if (h.startsWith('tel:')) return 'phone';
  if (h.includes('instagram.com')) return 'instagram';
  return null;
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;
      if (!anchor?.href) return;
      const method = detect(anchor.href);
      if (!method) return;
      track(method, anchor.href);
    },
    { capture: true },
  );
}
