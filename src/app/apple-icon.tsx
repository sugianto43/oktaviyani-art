import { artworkService } from '@/features/artworks/services/artworkService'
import { renderArtworkIcon, renderFallbackIcon } from '@/lib/seo/artworkIcon'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  const ruby = await artworkService.getBySlug('ruby')
  if (!ruby) return renderFallbackIcon(size, 120)
  return renderArtworkIcon(ruby.image.src, size)
}
