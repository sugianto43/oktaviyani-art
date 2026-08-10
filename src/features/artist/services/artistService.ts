import type { Artist } from '@/types'
import { mockArtist } from '@/lib/data/artworks'

export const artistService = {
  async get(): Promise<Artist> {
    return mockArtist
  },
}
