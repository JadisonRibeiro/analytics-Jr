interface Props {
  label?: string;
  tone?: 'dark' | 'light';
}

export function SoftDivider({ label, tone = 'dark' }: Props) {
  const dark = tone === 'dark';
  return (
    <div
      aria-hidden
      className={`relative flex w-full items-center justify-center py-10 ${
        dark ? 'bg-brand-black' : 'bg-brand-light'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 ${
          dark
            ? 'bg-gradient-to-r from-transparent via-white/15 to-transparent'
            : 'bg-gradient-to-r from-transparent via-black/15 to-transparent'
        }`}
      />
      <div
        className={`relative flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur ${
          dark
            ? 'border-white/10 bg-white/[0.03] text-gray-5'
            : 'border-black/10 bg-white text-gray-4'
        }`}
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${dark ? 'bg-neon' : 'bg-brand-black'} animate-pulse`}
        />
        <span className="text-[10px] uppercase tracking-[0.32em]">{label ?? 'Analytics JR'}</span>
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${dark ? 'bg-neon' : 'bg-brand-black'} animate-pulse`}
        />
      </div>
    </div>
  );
}
