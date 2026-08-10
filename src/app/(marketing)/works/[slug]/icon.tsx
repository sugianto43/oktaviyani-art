import { artworkService } from '@/features/artworks/services/artworkService'
import { renderArtworkIcon, renderFallbackIcon } from '@/lib/seo/artworkIcon'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)
  if (!artwork) return renderFallbackIcon(size, 22)
  return renderArtworkIcon(artwork.image.src, size)
}
