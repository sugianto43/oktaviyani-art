'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 flex flex-col bg-[var(--color-bg)]"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-lg tracking-widest uppercase" onClick={onClose}>
          Oktaviyani
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ✕
          </span>
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center px-6">
        <ul className="space-y-8">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={onClose}
                className="font-serif text-5xl font-light tracking-tight hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
