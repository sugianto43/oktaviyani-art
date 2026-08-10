import { HeroSection } from './_components/HeroSection'
import { SelectedWorks } from './_components/SelectedWorks'
import { ArtistStatement } from './_components/ArtistStatement'
import { artworkService } from '@/features/artworks/services/artworkService'
import { artistService } from '@/features/artist/services/artistService'

export default async function HomePage() {
  const [heroArtwork, featuredWorks, artist] = await Promise.all([
    artworkService.getHero(),
    artworkService.listFeatured(4),
    artistService.get(),
  ])

  return (
    <>
      <HeroSection artwork={heroArtwork} />
      <SelectedWorks artworks={featuredWorks} />
      <ArtistStatement artist={artist} />
    </>
  )
}
