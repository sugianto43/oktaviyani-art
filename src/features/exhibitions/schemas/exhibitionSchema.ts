import { z } from 'zod'

export const exhibitionSchema = z.object({
  id: z.string(),
  year: z.number(),
  title: z.string(),
  type: z.enum(['solo', 'group']),
  venue: z.string(),
  location: z.string(),
  description: z
    .string()
    .nullish()
    .transform((value) => value ?? undefined),
})

export const exhibitionsSchema = z.array(exhibitionSchema)
