import Link from 'next/link'
import type { Artwork } from '@/types'
import { ArtworkImage } from './ArtworkImage'

interface ArtworkCardProps {
  artwork: Artwork
  sizes?: string
}

export function ArtworkCard({ artwork, sizes }: ArtworkCardProps) {
  return (
    <Link
      href={`/works/${artwork.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
      aria-label={`${artwork.title}, ${artwork.medium}, ${artwork.year}`}
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
        <h3 className="font-serif text-lg font-light tracking-tight">{artwork.title}</h3>
        <p className="font-sans text-sm text-[var(--color-muted-fg)]">{artwork.medium}</p>
        <p className="font-sans text-sm text-[var(--color-muted-fg)]">{artwork.year}</p>
      </div>
    </Link>
  )
}
