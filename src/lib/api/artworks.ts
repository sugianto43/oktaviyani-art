import { z } from 'zod'
import type { Artwork, ArtworkCategory } from '@/types'
import { artworksDtoSchema } from '@/features/artworks/schemas/artworkSchema'

const artworksPageResponseSchema = z.object({
  artworks: artworksDtoSchema,
  total: z.number(),
})

interface FetchArtworksPageParams {
  page: number
  pageSize: number
  category?: ArtworkCategory
}

export interface ArtworksPageResponse {
  artworks: Artwork[]
  total: number
}

export async function fetchArtworksPage({
  page,
  pageSize,
  category,
}: FetchArtworksPageParams): Promise<ArtworksPageResponse> {
  const params = new URLSearchParams({ page: String(page), pageSize: String(pageSize) })
  if (category) params.set('category', category)

  const response = await fetch(`/api/artworks?${params.toString()}`)
  if (!response.ok) throw new Error('Failed to load artworks')

  const raw = await response.json()
  return artworksPageResponseSchema.parse(raw)
}
