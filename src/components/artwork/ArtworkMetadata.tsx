import type { Artwork } from '@/types'

const STATUS_LABEL: Record<Artwork['status'], string> = {
  available: 'Available',
  sold: 'Sold',
  'not-for-sale': 'Not for Sale',
}

interface ArtworkMetadataProps {
  artwork: Artwork
}

export function ArtworkMetadata({ artwork }: ArtworkMetadataProps) {
  return (
    <dl className="mt-8 space-y-3 border-t border-[var(--color-border-default)] pt-6 font-sans text-sm">
      <div className="flex justify-between">
        <dt className="text-[var(--color-muted-fg)]">Dimensions</dt>
        <dd>{artwork.dimensions}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-[var(--color-muted-fg)]">Category</dt>
        <dd className="capitalize">{artwork.category}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-[var(--color-muted-fg)]">Status</dt>
        <dd>{STATUS_LABEL[artwork.status]}</dd>
      </div>
    </dl>
  )
}
