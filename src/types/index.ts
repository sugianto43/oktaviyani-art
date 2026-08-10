export type ArtworkCategory = 'painting' | 'portrait' | 'abstract' | 'landscape'

export type ArtworkStatus = 'available' | 'sold' | 'not-for-sale'

export interface ArtworkImage {
  src: string
  width: number
  height: number
  blurDataUrl?: string
}

export interface Artwork {
  id: string
  slug: string
  title: string
  year: number
  category: ArtworkCategory
  medium: string
  dimensions: string
  image: ArtworkImage
  description: string
  status: ArtworkStatus
  featured: boolean
  /** Dominant color extracted from the artwork image, for per-artwork accent styling. */
  accentColor?: string
}

export interface Artist {
  name: string
  biography: string
  statement: string
  portrait: string
  location: string
  email: string
  instagram: string
}

export interface Exhibition {
  id: string
  year: number
  title: string
  type: 'solo' | 'group'
  venue: string
  location: string
  description?: string
}
