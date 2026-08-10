import type { Metadata } from 'next'
import { siteName, siteUrl } from './site'

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
}

export function buildMetadata({ title, description, path, image }: BuildMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
