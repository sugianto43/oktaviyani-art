import Link from 'next/link'
import { Container } from './Container'
import { artistService } from '@/features/artist/services/artistService'

export async function Footer() {
  const year = new Date().getFullYear()
  const artist = await artistService.get()

  return (
    <footer className="mt-auto border-t border-[var(--color-border-default)] py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="font-serif text-base tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            Oktaviyani
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {[
                { href: '/works', label: 'Works' },
                { href: '/about', label: 'About' },
                { href: '/exhibitions', label: 'Exhibitions' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm tracking-widest uppercase text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm tracking-widest uppercase text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          <p className="font-sans text-xs text-[var(--color-muted-fg)]">
            &copy; {year} Oktaviyani. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
