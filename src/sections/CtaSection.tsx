import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/assets/WhatsAppIcon';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';

const painOptions = [
  'Decisões baseadas em achismo',
  'Relatórios demoram demais para ficar prontos',
  'Dados espalhados em múltiplas planilhas e sistemas',
  'Falta visão consolidada do negócio',
  'ERPs, CRMs e ferramentas não conversam entre si',
  'Não sei quais KPIs devo acompanhar',
  'Preciso apresentar dados para a diretoria',
  'Quero evoluir um BI que já existe',
  'Outro / Ainda não sei definir',
] as const;

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  company: z.string().min(2, 'Informe a empresa'),
  phone: z
    .string()
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 11;
      },
      { message: 'Informe o telefone com DDD (ex: 91 99836-1022)' },
    ),
  pain: z.enum(painOptions, { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  message: z.string().min(10, 'Conte um pouco do seu contexto'),
});

type FormValues = z.infer<typeof schema>;

const FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycby_TdhqXnoHZm_vFfZFIcwzqcUBA81HgByAIF3aa20gtrKT1xjSXX4dME4BKY2QWQV3qg/exec';

export function FinalCtaSection() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const body = new URLSearchParams({ ...values, origin: 'site' });
      await fetch(FORM_ENDPOINT, { method: 'POST', body });
      setSent(true);
      reset();
    } catch {
      setSubmitError(
        'Não conseguimos enviar agora. Tente novamente ou fale pelo WhatsApp.',
      );
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
                Fale com a gente
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 font-heading text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-black"
              >
                Pronto para decidir
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-black via-black/75 to-black/45 bg-clip-text text-transparent">
                  com dados?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[460px] text-lg leading-relaxed text-black/70"
              >
                Conte seu contexto em 1 minuto. Respondemos com uma leitura estratégica em até 24 horas úteis.
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-8 space-y-3">
                {['Diagnóstico gratuito', 'Resposta em 24h', 'Sem compromisso'].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-black/80">
                    <CheckCircle2 size={18} className="text-black" /> {b}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/5591998361022"
                  target="_blank"
                  rel="noreferrer"
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(37,211,102,0.6)]"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp
                </a>
                <a
                  href="mailto:data.analyticsjr@gmail.com"
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)]"
                >
                  <Mail size={16} />
                  data.analyticsjr@gmail.com
                </a>
                <a
                  href="tel:+5591998361022"
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)]"
                >
                  <Phone size={16} />
                  +55 91 99836-1022
                </a>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] backdrop-blur sm:p-10"
            >
              <div className="pointer-events-none absolute -top-3 left-6 rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white shadow-lg">
                Formulário rápido
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
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]"
                  >
                    <CheckCircle2 size={28} />
                  </motion.div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-black">Mensagem recebida.</h3>
                  <p className="mt-2 max-w-[360px] text-black/65">
                    Obrigado. Nosso time retorna em até 24 horas úteis com uma leitura do seu cenário.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-black underline-offset-4 hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nome" error={errors.name?.message}>
                    <input {...register('name')} className={inputCls} placeholder="Seu nome" />
                  </Field>
                  <Field label="E-mail" error={errors.email?.message}>
                    <input {...register('email')} type="email" className={inputCls} placeholder="voce@empresa.com" />
                  </Field>
                  <Field label="Empresa" error={errors.company?.message}>
                    <input {...register('company')} className={inputCls} placeholder="Nome da empresa" />
                  </Field>
                  <Field label="WhatsApp com DDD" error={errors.phone?.message}>
                    <input
                      {...register('phone')}
                      inputMode="tel"
                      className={inputCls}
                      placeholder="(91) 99836-1022"
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Maior dor hoje" error={errors.pain?.message}>
                      <select
                        {...register('pain')}
                        defaultValue=""
                        className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%227%22 viewBox=%220 0 12 7%22 fill=%22none%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23000%22 stroke-opacity=%22.55%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-[length:12px_7px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      >
                        <option value="" disabled>
                          Selecione…
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
                    <Field label="Contexto" error={errors.message?.message}>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={`${inputCls} resize-none`}
                        placeholder="Conte em poucas linhas o desafio que você está enfrentando."
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-magnetic
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-black/85 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] disabled:opacity-60"
                    >
                      {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                    {submitError && (
                      <p className="mt-3 text-xs text-[#dc2626]">{submitError}</p>
                    )}
                    <p className="mt-3 text-xs text-black/50">
                      Ao enviar, você concorda com nossa política de privacidade.
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
      <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-black/55">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-[#dc2626]">{error}</span>}
    </label>
  );
}
