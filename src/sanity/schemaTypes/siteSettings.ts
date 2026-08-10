import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Homepage Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroArtwork',
      title: 'Hero Artwork',
      description: 'The artwork shown full-bleed at the top of the homepage.',
      type: 'reference',
      to: [{ type: 'artwork' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'heroArtwork.title', media: 'heroArtwork.image' },
    prepare: ({ title, media }) => ({
      title: 'Homepage Settings',
      subtitle: title ? `Hero: ${title}` : 'No hero artwork set',
      media,
    }),
  },
})
