import type { Exhibition } from '@/types'
import { mockExhibitions } from '@/lib/data/exhibitions'

export const exhibitionService = {
  async list(): Promise<Exhibition[]> {
    return [...mockExhibitions].sort((a, b) => b.year - a.year)
  },
}
