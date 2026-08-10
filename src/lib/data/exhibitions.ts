import type { Exhibition } from '@/types'

export const mockExhibitions: Exhibition[] = [
  {
    id: '3',
    year: 2022,
    title: 'Emerging Voices',
    type: 'group',
    venue: 'ISI Yogyakarta Art Space',
    location: 'Yogyakarta, Indonesia',
  },
  {
    id: '1',
    year: 2024,
    title: 'Between Moments',
    type: 'solo',
    venue: 'Ruang Rupa Gallery',
    location: 'Yogyakarta, Indonesia',
    description:
      'A solo exhibition exploring stillness and the spaces between sound, presented alongside new works on canvas.',
  },
  {
    id: '4',
    year: 2021,
    title: 'First Light',
    type: 'solo',
    venue: 'Kersan Artspace',
    location: 'Yogyakarta, Indonesia',
    description: 'Debut solo exhibition, presenting early explorations in oil and canvas.',
  },
  {
    id: '2',
    year: 2023,
    title: 'Light & Silence',
    type: 'group',
    venue: 'National Gallery of Indonesia',
    location: 'Jakarta, Indonesia',
    description:
      'A group show of contemporary Indonesian painters working in figuration and abstraction.',
  },
]
