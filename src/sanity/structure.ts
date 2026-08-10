import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Artist Profile')
        .child(S.document().schemaType('artist').documentId('artist')),
      S.divider(),
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('exhibition').title('Exhibitions'),
    ])
