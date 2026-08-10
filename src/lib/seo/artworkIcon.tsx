import { ImageResponse } from 'next/og'

interface IconSize {
  width: number
  height: number
}

export function artworkIconCropUrl(src: string, dimension: number) {
  return `${src}?w=${dimension}&h=${dimension}&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.32&auto=format`
}

export function renderFallbackIcon(size: IconSize, fontSize: number) {
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
        fontSize,
        fontWeight: 500,
      }}
    >
      O
    </div>,
    { ...size },
  )
}

export function renderArtworkIcon(imageSrc: string, size: IconSize) {
  return new ImageResponse(
    // ImageResponse (Satori) can't render next/image — plain <img> is the
    // documented way to embed images in a generated icon.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={artworkIconCropUrl(imageSrc, size.width)}
      width={size.width}
      height={size.height}
      alt=""
    />,
    { ...size },
  )
}
