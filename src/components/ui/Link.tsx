import NextLink from 'next/link'
import type { ComponentProps } from 'react'

const FOCUS_CLASSES =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]'

type LinkProps = ComponentProps<typeof NextLink>

export function Link({ className, ...props }: LinkProps) {
  return <NextLink className={[FOCUS_CLASSES, className].filter(Boolean).join(' ')} {...props} />
}
