import { ArtworkCard } from '@/components/artwork'
import type { Artwork } from '@/types'

interface ArtworkGridProps {
  artworks: Artwork[]
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
  if (artworks.length === 0) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="font-sans text-sm text-[var(--color-muted-fg)]">No artworks found.</p>
      </div>
    )
  }

  return (
    <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="mb-8 break-inside-avoid">
          <ArtworkCard
            artwork={artwork}
            sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ))}
    </div>
  )
}
