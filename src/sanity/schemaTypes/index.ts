import type { SchemaTypeDefinition } from 'sanity'
import { artwork } from './artwork'
import { artist } from './artist'
import { exhibition } from './exhibition'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artwork, artist, exhibition, siteSettings],
}
