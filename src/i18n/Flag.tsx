import type { Language } from './translations';

interface Props {
  code: Language;
  className?: string;
}

export function Flag({ code, className = 'h-4 w-[22px] rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.35)] ring-1 ring-black/10' }: Props) {
  if (code === 'pt') return <BrFlag className={className} />;
  if (code === 'en') return <UsFlag className={className} />;
  return <EsFlag className={className} />;
}

function BrFlag({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect width="28" height="20" rx="2" fill="#009C3B" />
      <path d="M14 3 L25 10 L14 17 L3 10 Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4" fill="#002776" />
      <path
        d="M10.2 10.6 Q14 8.6 17.8 10.6"
        stroke="#fff"
        strokeWidth="0.55"
        fill="none"
      />
    </svg>
  );
}

function UsFlag({ className }: { className: string }) {
  const stripes = Array.from({ length: 13 });
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect width="28" height="20" rx="2" fill="#fff" />
      {stripes.map((_, i) => (
        <rect
          key={i}
          x="0"
          y={(i * 20) / 13}
          width="28"
          height={20 / 13}
          fill={i % 2 === 0 ? '#B22234' : '#fff'}
        />
      ))}
      <rect width="11" height={(20 / 13) * 7} fill="#3C3B6E" />
      <g fill="#fff">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((__, col) => (
            <circle key={`a-${row}-${col}`} cx={1.1 + col * 2.2} cy={1.2 + row * 2.5} r="0.55" />
          )),
        )}
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 4 }).map((__, col) => (
            <circle key={`b-${row}-${col}`} cx={2.2 + col * 2.2} cy={2.45 + row * 2.5} r="0.55" />
          )),
        )}
      </g>
    </svg>
  );
}

function EsFlag({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect width="28" height="20" rx="2" fill="#AA151B" />
      <rect y="5" width="28" height="10" fill="#F1BF00" />
      <g transform="translate(7 8)">
        <rect width="3.6" height="4.5" rx="0.4" fill="#AA151B" />
        <rect x="0.5" y="0.6" width="2.6" height="3.3" fill="#F1BF00" opacity="0.85" />
        <rect x="1.3" y="1.4" width="1" height="2.4" fill="#AA151B" />
      </g>
    </svg>
  );
}
