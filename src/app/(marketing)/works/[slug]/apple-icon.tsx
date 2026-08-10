import { artworkService } from '@/features/artworks/services/artworkService'
import { renderArtworkIcon, renderFallbackIcon } from '@/lib/seo/artworkIcon'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)
  if (!artwork) return renderFallbackIcon(size, 120)
  return renderArtworkIcon(artwork.image.src, size)
}
