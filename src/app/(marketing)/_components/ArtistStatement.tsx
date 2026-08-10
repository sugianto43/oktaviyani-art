import Link from 'next/link'
import { Container } from '@/components/layout'
import type { Artist } from '@/types'

interface ArtistStatementProps {
  artist: Artist
}

export function ArtistStatement({ artist }: ArtistStatementProps) {
  return (
    <section
      aria-labelledby="statement-heading"
      className="py-24 md:py-32 border-t border-[var(--color-border-default)]"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)] mb-8">
            Artist Statement
          </p>
          <blockquote>
            <p
              id="statement-heading"
              className="font-serif text-3xl md:text-5xl font-light leading-relaxed tracking-tight text-[var(--color-fg)]"
            >
              &ldquo;{artist.statement}&rdquo;
            </p>
          </blockquote>
          <div className="mt-10">
            <Link
              href="/about"
              className="font-sans text-xs tracking-widest uppercase border-b border-[var(--color-muted-fg)] pb-0.5 text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
            >
              About the Artist
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
