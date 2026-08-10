import { describe, expect, it, vi } from 'vitest'

const fetchMock = vi.fn()
vi.mock('@/lib/sanity/client', () => ({
  sanityClient: { fetch: fetchMock },
}))

const { artworkService } = await import('./artworkService')

function rawArtwork(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    id: 'abc123',
    slug: 'the-silence',
    title: 'The Silence',
    year: 2024,
    category: 'abstract',
    medium: 'Oil on Canvas',
    dimensions: '120 x 160 cm',
    image: {
      asset: {
        url: 'https://cdn.sanity.io/images/proj/production/abc-1200x1600.jpg',
        metadata: {
          dimensions: { width: 1200, height: 1600 },
          lqip: 'data:image/jpeg;base64,abc',
        },
      },
    },
    description: 'A meditation on stillness.',
    status: 'available',
    featured: true,
    ...overrides,
  }
}

describe('artworkService.list', () => {
  it('maps and validates a list response', async () => {
    fetchMock.mockResolvedValueOnce([rawArtwork()])

    const result = await artworkService.list()

    expect(result).toEqual([
      {
        id: 'abc123',
        slug: 'the-silence',
        title: 'The Silence',
        year: 2024,
        category: 'abstract',
        medium: 'Oil on Canvas',
        dimensions: '120 x 160 cm',
        image: {
          src: 'https://cdn.sanity.io/images/proj/production/abc-1200x1600.jpg',
          width: 1200,
          height: 1600,
          blurDataUrl: 'data:image/jpeg;base64,abc',
        },
        description: 'A meditation on stillness.',
        status: 'available',
        featured: true,
      },
    ])
  })

  it('passes the category param through to the query when given', async () => {
    fetchMock.mockResolvedValueOnce([])

    await artworkService.list('landscape')

    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), { category: 'landscape' })
  })

  it('rejects a malformed response', async () => {
    fetchMock.mockResolvedValueOnce([rawArtwork({ category: 'not-a-real-category' })])

    await expect(artworkService.list()).rejects.toThrow()
  })
})

describe('artworkService.getBySlug', () => {
  it('returns null when Sanity returns no document', async () => {
    fetchMock.mockResolvedValueOnce(null)
    const result = await artworkService.getBySlug('does-not-exist')
    expect(result).toBeNull()
  })

  it('maps a found document', async () => {
    fetchMock.mockResolvedValueOnce(rawArtwork())
    const result = await artworkService.getBySlug('the-silence')
    expect(result?.slug).toBe('the-silence')
  })
})

describe('artworkService.getHero', () => {
  it('falls back to the first artwork when nothing is featured', async () => {
    fetchMock.mockResolvedValueOnce(null).mockResolvedValueOnce([rawArtwork({ featured: false })])

    const result = await artworkService.getHero()

    expect(result.slug).toBe('the-silence')
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })
})
