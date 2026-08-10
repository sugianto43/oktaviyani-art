import type { Artwork, Artist } from '@/types'

export const mockArtworks: Artwork[] = [
  {
    id: '1',
    slug: 'the-silence',
    title: 'The Silence',
    year: 2024,
    category: 'abstract',
    medium: 'Oil on Canvas',
    dimensions: '120 × 160 cm',
    image: {
      src: 'https://placehold.co/1200x1600/e8e2d9/66615b?text=The+Silence',
      width: 1200,
      height: 1600,
    },
    description:
      'A meditation on stillness and the spaces between sound. The composition explores tension through restrained color and deliberate mark-making.',
    status: 'available',
    featured: true,
  },
  {
    id: '2',
    slug: 'morning-light-ii',
    title: 'Morning Light II',
    year: 2024,
    category: 'landscape',
    medium: 'Oil on Linen',
    dimensions: '80 × 100 cm',
    image: {
      src: 'https://placehold.co/800x1000/ddd6cc/66615b?text=Morning+Light+II',
      width: 800,
      height: 1000,
    },
    description: 'Early morning atmosphere captured in warm, diffused tones.',
    status: 'sold',
    featured: true,
  },
  {
    id: '3',
    slug: 'unnamed-study-vii',
    title: 'Unnamed Study VII',
    year: 2023,
    category: 'abstract',
    medium: 'Acrylic on Canvas',
    dimensions: '60 × 80 cm',
    image: {
      src: 'https://placehold.co/600x800/cfc9bf/66615b?text=Unnamed+Study+VII',
      width: 600,
      height: 800,
    },
    description: 'Part of an ongoing series exploring form without narrative.',
    status: 'available',
    featured: true,
  },
  {
    id: '4',
    slug: 'portrait-of-r',
    title: 'Portrait of R.',
    year: 2023,
    category: 'portrait',
    medium: 'Oil on Canvas',
    dimensions: '50 × 70 cm',
    image: {
      src: 'https://placehold.co/500x700/e2ddd6/66615b?text=Portrait+of+R.',
      width: 500,
      height: 700,
    },
    description: 'A quiet study of presence and gaze.',
    status: 'not-for-sale',
    featured: false,
  },
]

export const mockArtist: Artist = {
  name: 'Oktaviyani',
  biography:
    'Oktaviyani is an Indonesian contemporary painter based in Yogyakarta. Her practice centers on the relationship between light, silence, and material presence.',
  statement:
    'I paint to find the moments between moments — the pause before a word is spoken, the light before it shifts. Painting is an act of sustained attention.',
  portrait: 'https://placehold.co/600x800/e8e2d9/66615b?text=Artist+Portrait',
  location: 'Yogyakarta, Indonesia',
  email: 'hello@oktaviyani.art',
  instagram: 'https://instagram.com/oktaviyani.art',
}

// mockArtworks always has items — safe assertion
export const heroArtwork = (mockArtworks.find((a) => a.featured) ?? mockArtworks[0])!
