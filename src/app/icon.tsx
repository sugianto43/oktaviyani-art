import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
