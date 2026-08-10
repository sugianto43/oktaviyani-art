import type { Metadata } from 'next'
import { HeroSection } from './_components/HeroSection'
import { SelectedWorks } from './_components/SelectedWorks'
import { ArtistStatement } from './_components/ArtistStatement'
import { artworkService } from '@/features/artworks/services/artworkService'
import { artistService } from '@/features/artist/services/artistService'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteName } from '@/lib/seo/site'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const heroArtwork = await artworkService.getHero()
  return {
    ...buildMetadata({
      title: siteName,
      description: 'Portfolio of contemporary paintings by Oktaviyani.',
      path: '/',
      image: heroArtwork.image.src,
    }),
    title: { absolute: siteName },
  }
}

export default async function HomePage() {
  const heroArtwork = await artworkService.getHero()
  const featuredWorks = await artworkService.listFeatured(4)
  const artist = await artistService.get()

  return (
    <>
      <HeroSection artwork={heroArtwork} />
      <SelectedWorks artworks={featuredWorks} />
      <ArtistStatement artist={artist} />
    </>
  )
}
