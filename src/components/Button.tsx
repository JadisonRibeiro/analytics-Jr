import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'ghost' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

export function Button({ variant = 'primary', icon, children, className, ...rest }: Props) {
  const v =
    variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : 'btn-dark';
  return (
    <button data-magnetic className={cn('btn', v, className)} {...rest}>
      {children}
      {icon}
    </button>
  );
}
