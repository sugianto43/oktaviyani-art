import { artworkService } from '@/features/artworks/services/artworkService'
import { renderArtworkIcon, renderFallbackIcon } from '@/lib/seo/artworkIcon'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const ruby = await artworkService.getBySlug('ruby')
  if (!ruby) return renderFallbackIcon(size, 22)
  return renderArtworkIcon(ruby.image.src, size)
}
