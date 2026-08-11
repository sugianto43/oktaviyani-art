import Link from 'next/link'
import type { Artwork } from '@/types'
import { ArtworkImage } from './ArtworkImage'

const STATUS_LABEL: Partial<Record<Artwork['status'], string>> = {
  sold: 'Sold',
  'not-for-sale': 'Not for Sale',
}

interface ArtworkCardProps {
  artwork: Artwork
  sizes?: string
}

export function ArtworkCard({ artwork, sizes }: ArtworkCardProps) {
  const statusLabel = STATUS_LABEL[artwork.status]

  return (
    <Link
      href={`/works/${artwork.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
      aria-label={`${artwork.title}, ${artwork.medium}, ${artwork.year}`}
      style={
        artwork.accentColor
          ? ({ '--artwork-accent': artwork.accentColor } as React.CSSProperties)
          : undefined
      }
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <ArtworkImage
            image={artwork.image}
            alt={artwork.title}
            sizes={sizes ?? '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw'}
          />
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="inline-block border-b-2 border-transparent font-serif text-lg font-light tracking-tight transition-colors duration-300 group-hover:border-[var(--artwork-accent,var(--color-fg))]">
          {artwork.title}
        </h3>
        <p className="font-sans text-sm text-[var(--color-muted-fg)]">{artwork.medium}</p>
        <div className="flex items-center gap-2">
          <p className="font-sans text-sm text-[var(--color-muted-fg)]">{artwork.year}</p>
          {statusLabel && (
            <span className="font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)]">
              &middot; {statusLabel}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
