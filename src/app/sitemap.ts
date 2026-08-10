import type { MetadataRoute } from 'next'
import { artworkService } from '@/features/artworks/services/artworkService'
import { siteUrl } from '@/lib/seo/site'

export const dynamic = 'force-dynamic'

const STATIC_ROUTES = ['/', '/works', '/about', '/exhibitions', '/contact']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artworks = await artworkService.list()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  const artworkEntries: MetadataRoute.Sitemap = artworks.map((artwork) => ({
    url: `${siteUrl}/works/${artwork.slug}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...artworkEntries]
}
