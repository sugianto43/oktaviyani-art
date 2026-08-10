import { describe, expect, it, vi } from 'vitest'

const fetchMock = vi.fn()
vi.mock('@/lib/sanity/client', () => ({
  sanityClient: { fetch: fetchMock },
}))

const { artistService } = await import('./artistService')

const rawArtist = {
  name: 'Oktaviyani',
  biography: 'A painter.',
  statement: 'I paint to find moments.',
  portrait: 'https://cdn.sanity.io/images/proj/production/portrait-600x800.jpg',
  location: 'Yogyakarta, Indonesia',
  email: 'hello@oktaviyani.art',
  instagram: 'https://instagram.com/oktaviyani.art',
}

describe('artistService.get', () => {
  it('maps and validates the artist document', async () => {
    fetchMock.mockResolvedValueOnce(rawArtist)
    const result = await artistService.get()
    expect(result).toEqual(rawArtist)
  })

  it('rejects a malformed response', async () => {
    fetchMock.mockResolvedValueOnce({ ...rawArtist, email: 'not-an-email' })
    await expect(artistService.get()).rejects.toThrow()
  })
})
