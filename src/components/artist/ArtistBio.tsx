import Image from 'next/image'
import type { Artist } from '@/types'

interface ArtistBioProps {
  artist: Artist
}

export function ArtistBio({ artist }: ArtistBioProps) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={artist.portrait}
          alt={artist.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-md">
        <h1 className="font-serif text-5xl font-light tracking-tight md:text-7xl">{artist.name}</h1>
        <p className="mt-2 font-sans text-sm text-[var(--color-muted-fg)]">{artist.location}</p>

        <p className="mt-8 font-sans text-sm leading-relaxed text-[var(--color-muted-fg)]">
          {artist.biography}
        </p>
      </div>
    </div>
  )
}
