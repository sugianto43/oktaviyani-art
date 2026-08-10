import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../src/sanity/env'
import { mockArtworks, mockArtist } from '../src/lib/data/artworks'
import { mockExhibitions } from '../src/lib/data/exhibitions'

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  throw new Error('Missing environment variable: SANITY_API_WRITE_TOKEN')
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false })

async function uploadImage(url: string, filename: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }
  const buffer = Buffer.from(await response.arrayBuffer())
  return client.assets.upload('image', buffer, { filename })
}

async function seedArtist() {
  const asset = await uploadImage(mockArtist.portrait, 'artist-portrait.svg')
  await client.createOrReplace({
    _id: 'artist',
    _type: 'artist',
    name: mockArtist.name,
    biography: mockArtist.biography,
    statement: mockArtist.statement,
    portrait: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    location: mockArtist.location,
    email: mockArtist.email,
    instagram: mockArtist.instagram,
  })
  console.info('Seeded artist profile')
}

async function seedArtworks() {
  for (const artwork of mockArtworks) {
    const asset = await uploadImage(artwork.image.src, `${artwork.slug}.svg`)
    await client.createOrReplace({
      _id: `artwork-${artwork.slug}`,
      _type: 'artwork',
      title: artwork.title,
      slug: { _type: 'slug', current: artwork.slug },
      year: artwork.year,
      category: artwork.category,
      medium: artwork.medium,
      dimensions: artwork.dimensions,
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      description: artwork.description,
      status: artwork.status,
      featured: artwork.featured,
    })
    console.info(`Seeded artwork: ${artwork.title}`)
  }
}

async function seedExhibitions() {
  for (const exhibition of mockExhibitions) {
    await client.createOrReplace({
      _id: `exhibition-${exhibition.id}`,
      _type: 'exhibition',
      year: exhibition.year,
      title: exhibition.title,
      type: exhibition.type,
      venue: exhibition.venue,
      location: exhibition.location,
      description: exhibition.description,
    })
    console.info(`Seeded exhibition: ${exhibition.title}`)
  }
}

async function main() {
  await seedArtist()
  await seedArtworks()
  await seedExhibitions()
  console.info('Seed complete.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
