import type { Artwork, ArtworkCategory } from '@/types'
import { mockArtworks } from '@/lib/data/artworks'

export const artworkService = {
  async list(category?: ArtworkCategory): Promise<Artwork[]> {
    if (!category) return mockArtworks
    return mockArtworks.filter((artwork) => artwork.category === category)
  },

  async getBySlug(slug: string): Promise<Artwork | null> {
    return mockArtworks.find((artwork) => artwork.slug === slug) ?? null
  },
}
