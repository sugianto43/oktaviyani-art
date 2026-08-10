import type { Artwork, ArtworkCategory } from '@/types'
import { sanityClient } from '@/lib/sanity/client'
import {
  artworksQuery,
  artworksByCategoryQuery,
  artworkBySlugQuery,
  featuredArtworksQuery,
  siteSettingsHeroQuery,
} from '@/lib/sanity/queries'
import { artworkSchema, artworksSchema } from '../schemas/artworkSchema'

export const artworkService = {
  async list(category?: ArtworkCategory): Promise<Artwork[]> {
    const raw = category
      ? await sanityClient.fetch(artworksByCategoryQuery, { category })
      : await sanityClient.fetch(artworksQuery)
    return artworksSchema.parse(raw)
  },

  async getBySlug(slug: string): Promise<Artwork | null> {
    const raw = await sanityClient.fetch(artworkBySlugQuery, { slug })
    if (!raw) return null
    return artworkSchema.parse(raw)
  },

  async listFeatured(limit = 100): Promise<Artwork[]> {
    const raw = await sanityClient.fetch(featuredArtworksQuery, { limit })
    return artworksSchema.parse(raw)
  },

  async getHero(): Promise<Artwork> {
    const raw =
      (await sanityClient.fetch(siteSettingsHeroQuery)) ??
      (await sanityClient.fetch(artworksQuery))?.[0]
    return artworkSchema.parse(raw)
  },
}
