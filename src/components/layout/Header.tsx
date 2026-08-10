'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { Container } from './Container'
import { ThemeToggle } from '@/components/ui'

const NAV_LINKS = [
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <Container>
          <div className="flex items-center justify-between py-5">
            <Link
              href="/"
              className="font-serif text-base tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
            >
              Oktaviyani
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-2 md:flex">
              <nav aria-label="Primary navigation">
                <ul className="flex items-center gap-10">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm tracking-widest uppercase text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggle />
            </div>

            {/* Mobile trigger row */}
            <div className="flex items-center gap-1 md:hidden">
              <ThemeToggle />
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
              >
                <span aria-hidden="true" className="flex flex-col gap-1.5">
                  <span className="block h-px w-5 bg-[var(--color-fg)]" />
                  <span className="block h-px w-5 bg-[var(--color-fg)]" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
