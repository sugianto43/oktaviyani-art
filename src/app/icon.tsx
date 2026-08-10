import { ImageResponse } from 'next/og'
import { artworkService } from '@/features/artworks/services/artworkService'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

function cropUrl(src: string, dimension: number) {
  return `${src}?w=${dimension}&h=${dimension}&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.32&auto=format`
}

export default async function Icon() {
  const ruby = await artworkService.getBySlug('ruby')

  if (!ruby) {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f2eb',
          color: '#171717',
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        O
      </div>,
      { ...size },
    )
  }

  return new ImageResponse(
    <img
      src={cropUrl(ruby.image.src, size.width)}
      width={size.width}
      height={size.height}
      alt=""
    />,
    { ...size },
  )
}
