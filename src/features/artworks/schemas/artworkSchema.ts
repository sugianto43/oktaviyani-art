import { z } from 'zod'
import type { Artwork } from '@/types'

const CATEGORIES = ['painting', 'portrait', 'abstract', 'landscape'] as const
const STATUSES = ['available', 'sold', 'not-for-sale'] as const

export const artworkSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    year: z.number(),
    category: z.enum(CATEGORIES),
    medium: z.string(),
    dimensions: z.string(),
    image: z.object({
      asset: z.object({
        url: z.string(),
        metadata: z.object({
          dimensions: z.object({ width: z.number(), height: z.number() }),
          lqip: z.string().nullish(),
          palette: z
            .object({
              dominant: z.object({ background: z.string() }).nullish(),
            })
            .nullish(),
        }),
      }),
    }),
    description: z.string(),
    status: z.enum(STATUSES),
    featured: z.boolean(),
  })
  .transform((raw): Artwork => ({
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    year: raw.year,
    category: raw.category,
    medium: raw.medium,
    dimensions: raw.dimensions,
    image: {
      src: raw.image.asset.url,
      width: raw.image.asset.metadata.dimensions.width,
      height: raw.image.asset.metadata.dimensions.height,
      blurDataUrl: raw.image.asset.metadata.lqip ?? undefined,
    },
    description: raw.description,
    status: raw.status,
    featured: raw.featured,
    accentColor: raw.image.asset.metadata.palette?.dominant?.background ?? undefined,
  }))

export const artworksSchema = z.array(artworkSchema)

// Validates an already-transformed Artwork, e.g. a JSON response from our own API route.
export const artworkDtoSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  year: z.number(),
  category: z.enum(CATEGORIES),
  medium: z.string(),
  dimensions: z.string(),
  image: z.object({
    src: z.string(),
    width: z.number(),
    height: z.number(),
    blurDataUrl: z.string().optional(),
  }),
  description: z.string(),
  status: z.enum(STATUSES),
  featured: z.boolean(),
  accentColor: z.string().optional(),
}) satisfies z.ZodType<Artwork>

export const artworksDtoSchema = z.array(artworkDtoSchema)
