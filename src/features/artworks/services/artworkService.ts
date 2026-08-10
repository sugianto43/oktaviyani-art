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

  async listFeatured(limit?: number): Promise<Artwork[]> {
    const featured = mockArtworks.filter((artwork) => artwork.featured)
    return limit ? featured.slice(0, limit) : featured
  },

  async getHero(): Promise<Artwork> {
    const featured = mockArtworks.find((artwork) => artwork.featured)
    // mockArtworks is a non-empty static fixture — safe fallback
    return featured ?? mockArtworks[0]!
  },
}
