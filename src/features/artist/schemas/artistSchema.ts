import { z } from 'zod'

export const artistSchema = z.object({
  name: z.string(),
  biography: z.string(),
  statement: z.string(),
  portrait: z.string(),
  location: z.string(),
  email: z.email(),
  instagram: z.string(),
})
