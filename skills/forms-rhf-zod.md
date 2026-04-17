# React Hook Form + Zod

**Versões**: `react-hook-form@7.53.2`, `zod@3.23.8`, `@hookform/resolvers@3.9.1`

## Onde é usado
Formulário de contato da `FinalCtaSection` (5 campos).

## Aplicações no projeto
- **`src/sections/CtaSection.tsx`**:
  - Schema Zod com regras por campo:
    ```ts
    const schema = z.object({
      name: z.string().min(2, 'Informe seu nome'),
      email: z.string().email('E-mail inválido'),
      company: z.string().min(2, 'Informe a empresa'),
      phone: z.string().min(8, 'Telefone inválido'),
      message: z.string().min(10, 'Conte um pouco do seu contexto'),
    });
    ```
  - `type FormValues = z.infer<typeof schema>` — tipagem derivada automaticamente.
  - `useForm({ resolver: zodResolver(schema) })` conecta validação ao formulário.
  - `handleSubmit(onSubmit)` — bloqueio do submit com `isSubmitting`; mensagens de erro por campo via `errors.name?.message`.
  - Estado `sent` substitui o form por tela de sucesso (`CheckCircle2`) com opção "Enviar outra mensagem".
  - Componente `<Field>` local agrupa `label + input + mensagem de erro` para reduzir repetição.
