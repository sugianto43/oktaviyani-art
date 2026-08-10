import type { SchemaTypeDefinition } from 'sanity'
import { artwork } from './artwork'
import { artist } from './artist'
import { exhibition } from './exhibition'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artwork, artist, exhibition],
}
