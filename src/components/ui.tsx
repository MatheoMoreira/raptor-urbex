import type { ComponentProps, ReactNode } from 'react'

const buttonBase =
  'inline-flex min-h-13 items-center gap-2.5 rounded-full px-7 text-[15px] font-semibold transition-colors'

const buttonVariants = {
  solid: 'bg-torch text-night hover:bg-torch-light',
  ghost: 'border border-bone/45 text-bone hover:border-torch hover:text-torch',
  outline: 'border border-chip text-bone hover:border-torch hover:text-torch',
}

export type ButtonVariant = keyof typeof buttonVariants

export function buttonClass(variant: ButtonVariant = 'solid', extra = '') {
  return `${buttonBase} ${buttonVariants[variant]} ${extra}`
}

type ButtonLinkProps = ComponentProps<'a'> & { variant?: ButtonVariant }

export function ButtonLink({ variant = 'solid', className = '', ...props }: ButtonLinkProps) {
  return <a className={buttonClass(variant, className)} {...props} />
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[13px] font-bold uppercase tracking-[0.3em] text-torch ${className}`}>{children}</p>
  )
}

export function MetaLabel({ children }: { children: ReactNode }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">{children}</span>
}

/** Ouvre les liens externes dans un nouvel onglet. */
export const external = { target: '_blank', rel: 'noreferrer' } as const
