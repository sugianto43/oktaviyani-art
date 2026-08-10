import { HeroSection } from './_components/HeroSection'
import { SelectedWorks } from './_components/SelectedWorks'
import { ArtistStatement } from './_components/ArtistStatement'
import { heroArtwork, mockArtworks, mockArtist } from '@/lib/data/artworks'

const featuredWorks = mockArtworks.filter((a) => a.featured).slice(0, 4)

export default function HomePage() {
  return (
    <>
      <HeroSection artwork={heroArtwork} />
      <SelectedWorks artworks={featuredWorks} />
      <ArtistStatement artist={mockArtist} />
    </>
  )
}
