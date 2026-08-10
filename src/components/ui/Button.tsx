import NextLink from 'next/link'
import type { ButtonHTMLAttributes } from 'react'

const BUTTON_CLASSES =
  'border border-[var(--color-fg)] px-6 py-3 font-sans text-xs tracking-widest uppercase transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)] disabled:cursor-not-allowed disabled:opacity-50'

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
}

interface ButtonAsLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export function Button(props: ButtonProps) {
  const className = [BUTTON_CLASSES, props.className].filter(Boolean).join(' ')

  if ('href' in props && props.href !== undefined) {
    const { href, children } = props
    return (
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    )
  }

  return <button {...(props as ButtonAsButtonProps)} className={className} />
}
