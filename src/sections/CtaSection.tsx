import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/assets/WhatsAppIcon';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';
import { whatsappUrl, emailUrl, EMAIL, PHONE, PHONE_DISPLAY } from '@/utils/contact';
import { trackFormLead } from '@/utils/analytics';
import { useLanguage } from '@/i18n/LanguageContext';

const FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwIAniCCDuijBs9qMPlU5R5U0XK7os9qUMpC6Kc5zfogSOdWRWkNo03upmNjJHiNlEBaw/exec';

export function FinalCtaSection() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const painOptions = t.cta.painOptions;
  const sourceOptions = t.cta.sourceOptions;
  const sourceOtherValue = t.cta.sourceOtherValue;

  const schema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(2, t.cta.errors.name),
          email: z.string().email(t.cta.errors.email),
          company: z.string().min(2, t.cta.errors.company),
          phone: z.string().refine(
            (v) => {
              const digits = v.replace(/\D/g, '');
              return digits.length >= 8 && digits.length <= 15;
            },
            { message: t.cta.errors.phone },
          ),
          pain: z.string().min(1, t.cta.errors.select),
          source: z.string().min(1, t.cta.errors.select),
          sourceOther: z.string().optional(),
          message: z.string().min(10, t.cta.errors.message),
        })
        .refine(
          (d) => d.source !== sourceOtherValue || (d.sourceOther?.trim().length ?? 0) >= 2,
          { message: t.cta.errors.sourceOther, path: ['sourceOther'] },
        ),
    [t, sourceOtherValue],
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const selectedSource = watch('source');

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const source =
        values.source === sourceOtherValue && values.sourceOther
          ? values.sourceOther
          : values.source;

      const body = new URLSearchParams();
      body.append('name', values.name);
      body.append('email', values.email);
      body.append('company', values.company);
      body.append('phone', values.phone);
      body.append('pain', values.pain);
      body.append('source', source);
      body.append('message', values.message);
      body.append('origin', 'site');

      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) {
        throw new Error('submit-failed');
      }
      trackFormLead({ pain: values.pain, source });
      setSent(true);
      reset();
    } catch {
      setSubmitError(t.cta.submitError);
    }
  };

  return (
    <section id="cta" className="relative bg-brand-black py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-white via-[#FAFAF8] to-[#F0F0EC] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-black/[0.04] sm:rounded-[64px]"
        >
          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.04),transparent_65%)]" />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-16 lg:p-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-black/65"
              >
                <Sparkles size={12} className="text-black/70" />
                {t.cta.eyebrow}
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 font-heading text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[1.15] tracking-normal sm:leading-[0.98] sm:tracking-[-0.02em] text-black"
              >
                {t.cta.title1}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-black via-black/75 to-black/45 bg-clip-text text-transparent">
                  {t.cta.title2}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[460px] text-lg leading-relaxed text-black/70"
              >
                {t.cta.description}
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-8 space-y-3">
                {t.cta.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-black/80">
                    <CheckCircle2 size={18} className="text-black" /> {b}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(37,211,102,0.6)]"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp
                </a>
                <a
                  href={emailUrl}
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)]"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>
                <a
                  href={`tel:+${PHONE}`}
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)]"
                >
                  <Phone size={16} />
                  {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] p-6 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.55)] sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_65%)]" />
                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_65%)]" />
              </div>
              <div className="absolute -top-3 left-6 z-20 rounded-full bg-neon px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-black shadow-[0_8px_24px_-6px_rgba(192,192,192,0.55)] ring-1 ring-white/30">
                {t.cta.formBadge}
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#14B8A6] text-black shadow-[0_20px_40px_-12px_rgba(20,184,166,0.55)]"
                  >
                    <CheckCircle2 size={28} />
                  </motion.div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-white">{t.cta.successTitle}</h3>
                  <p className="mt-2 max-w-[360px] text-white/70">
                    {t.cta.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-white underline-offset-4 hover:underline"
                  >
                    {t.cta.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.cta.labels.name} error={errors.name?.message}>
                    <input {...register('name')} className={inputCls} placeholder={t.cta.placeholders.name} />
                  </Field>
                  <Field label={t.cta.labels.email} error={errors.email?.message}>
                    <input {...register('email')} type="email" className={inputCls} placeholder={t.cta.placeholders.email} />
                  </Field>
                  <Field label={t.cta.labels.company} error={errors.company?.message}>
                    <input {...register('company')} className={inputCls} placeholder={t.cta.placeholders.company} />
                  </Field>
                  <Field label={t.cta.labels.phone} error={errors.phone?.message}>
                    <input
                      {...register('phone')}
                      inputMode="tel"
                      className={inputCls}
                      placeholder={t.cta.placeholders.phone}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label={t.cta.labels.pain} error={errors.pain?.message}>
                      <select
                        {...register('pain')}
                        defaultValue=""
                        className={`${inputCls} ${selectCls}`}
                      >
                        <option value="" disabled>
                          {t.cta.placeholders.select}
                        </option>
                        {painOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={t.cta.labels.source} error={errors.source?.message}>
                      <select
                        {...register('source')}
                        defaultValue=""
                        className={`${inputCls} ${selectCls}`}
                      >
                        <option value="" disabled>
                          {t.cta.placeholders.select}
                        </option>
                        {sourceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  {selectedSource === sourceOtherValue && (
                    <div className="sm:col-span-2">
                      <Field label={t.cta.labels.sourceOther} error={errors.sourceOther?.message}>
                        <input
                          {...register('sourceOther')}
                          className={inputCls}
                          placeholder={t.cta.placeholders.sourceOther}
                        />
                      </Field>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <Field label={t.cta.labels.message} error={errors.message?.message}>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={`${inputCls} resize-none`}
                        placeholder={t.cta.placeholders.message}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-magnetic
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-4 text-sm font-semibold text-black ring-1 ring-white/20 transition-all hover:gap-3 hover:bg-white hover:shadow-[0_20px_40px_-12px_rgba(192,192,192,0.55)] disabled:opacity-60"
                    >
                      {isSubmitting ? t.cta.submitting : t.cta.submit}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                    {submitError && (
                      <p className="mt-3 text-xs text-[#F87171]">{submitError}</p>
                    )}
                    <p className="mt-3 text-xs text-white/55">
                      {t.cta.privacy}
                    </p>
                  </div>
                </div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/35 transition focus:border-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10';

const selectCls =
  "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%227%22 viewBox=%220 0 12 7%22 fill=%22none%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23000%22 stroke-opacity=%22.55%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-[length:12px_7px] bg-[right_1rem_center] bg-no-repeat pr-10";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-white/65">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-[#F87171]">{error}</span>}
    </label>
  );
}
