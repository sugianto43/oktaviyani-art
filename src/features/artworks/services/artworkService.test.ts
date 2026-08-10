import { describe, expect, it } from 'vitest'
import { artworkService } from './artworkService'
import { mockArtworks } from '@/lib/data/artworks'

describe('artworkService.list', () => {
  it('returns all artworks when no category is given', async () => {
    const result = await artworkService.list()
    expect(result).toEqual(mockArtworks)
  })

  it('filters artworks by category', async () => {
    const result = await artworkService.list('landscape')
    expect(result.length).toBeGreaterThan(0)
    expect(result.every((artwork) => artwork.category === 'landscape')).toBe(true)
  })

  it('returns an empty array for a category with no matches', async () => {
    const result = await artworkService.list('painting')
    expect(result).toEqual([])
  })
})

describe('artworkService.getBySlug', () => {
  it('returns the matching artwork', async () => {
    const first = mockArtworks[0]
    if (!first) throw new Error('expected at least one mock artwork')
    const result = await artworkService.getBySlug(first.slug)
    expect(result).toEqual(first)
  })

  it('returns null for an unknown slug', async () => {
    const result = await artworkService.getBySlug('does-not-exist')
    expect(result).toBeNull()
  })
})
