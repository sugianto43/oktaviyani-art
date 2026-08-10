import { HeroSection } from './_components/HeroSection'
import { SelectedWorks } from './_components/SelectedWorks'
import { ArtistStatement } from './_components/ArtistStatement'
import { artworkService } from '@/features/artworks/services/artworkService'
import { artistService } from '@/features/artist/services/artistService'

export const dynamic = 'force-dynamic'

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
