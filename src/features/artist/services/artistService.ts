import type { Artist } from '@/types'
import { sanityClient } from '@/lib/sanity/client'
import { artistQuery } from '@/lib/sanity/queries'
import { artistSchema } from '../schemas/artistSchema'

export const artistService = {
  async get(): Promise<Artist> {
    const raw = await sanityClient.fetch(artistQuery)
    return artistSchema.parse(raw)
  },
}
