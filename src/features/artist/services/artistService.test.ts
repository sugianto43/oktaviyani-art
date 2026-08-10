import { describe, expect, it } from 'vitest'
import { artistService } from './artistService'
import { mockArtist } from '@/lib/data/artworks'

describe('artistService.get', () => {
  it('returns the artist profile', async () => {
    const result = await artistService.get()
    expect(result).toEqual(mockArtist)
  })
})
