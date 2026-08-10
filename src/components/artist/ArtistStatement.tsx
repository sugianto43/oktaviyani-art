import type { Artist } from '@/types'

interface ArtistStatementProps {
  artist: Artist
}

export function ArtistStatement({ artist }: ArtistStatementProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-6 font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)]">
        Artist Statement
      </p>
      <blockquote>
        <p className="font-serif text-3xl font-light leading-relaxed tracking-tight md:text-5xl">
          &ldquo;{artist.statement}&rdquo;
        </p>
      </blockquote>
    </div>
  )
}
