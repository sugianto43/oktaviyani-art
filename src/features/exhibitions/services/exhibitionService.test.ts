import { describe, expect, it, vi } from 'vitest'

const fetchMock = vi.fn()
vi.mock('@/lib/sanity/client', () => ({
  sanityClient: { fetch: fetchMock },
}))

const { exhibitionService } = await import('./exhibitionService')

function rawExhibition(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    id: 'abc123',
    year: 2024,
    title: 'Between Moments',
    type: 'solo',
    venue: 'Ruang Rupa Gallery',
    location: 'Yogyakarta, Indonesia',
    description: 'A solo exhibition.',
    ...overrides,
  }
}

describe('exhibitionService.list', () => {
  it('maps and validates a list response', async () => {
    fetchMock.mockResolvedValueOnce([rawExhibition()])

    const result = await exhibitionService.list()

    expect(result).toEqual([
      {
        id: 'abc123',
        year: 2024,
        title: 'Between Moments',
        type: 'solo',
        venue: 'Ruang Rupa Gallery',
        location: 'Yogyakarta, Indonesia',
        description: 'A solo exhibition.',
      },
    ])
  })

  it('normalizes a null description to undefined', async () => {
    fetchMock.mockResolvedValueOnce([rawExhibition({ description: null })])

    const [result] = await exhibitionService.list()

    expect(result?.description).toBeUndefined()
  })

  it('rejects a malformed response', async () => {
    fetchMock.mockResolvedValueOnce([rawExhibition({ type: 'retrospective' })])

    await expect(exhibitionService.list()).rejects.toThrow()
  })
})
