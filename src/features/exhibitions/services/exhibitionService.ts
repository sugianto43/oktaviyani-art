import type { Exhibition } from '@/types'
import { sanityClient } from '@/lib/sanity/client'
import { exhibitionsQuery } from '@/lib/sanity/queries'
import { exhibitionsSchema } from '../schemas/exhibitionSchema'

export const exhibitionService = {
  async list(): Promise<Exhibition[]> {
    const raw = await sanityClient.fetch(exhibitionsQuery)
    return exhibitionsSchema.parse(raw)
  },
}
