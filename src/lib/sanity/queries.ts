const artworkImageProjection = `
  image{
    ...,
    asset->{
      url,
      metadata{dimensions, lqip}
    }
  }
`

const artworkProjection = `{
  "id": _id,
  "slug": slug.current,
  title,
  year,
  category,
  medium,
  dimensions,
  ${artworkImageProjection},
  description,
  status,
  featured
}`

export const artworksQuery = `*[_type == "artwork"] | order(year desc) ${artworkProjection}`

export const artworksByCategoryQuery = `*[_type == "artwork" && category == $category] | order(year desc) ${artworkProjection}`

export const artworkBySlugQuery = `*[_type == "artwork" && slug.current == $slug][0] ${artworkProjection}`

export const featuredArtworksQuery = `*[_type == "artwork" && featured == true] | order(year desc) [0...$limit] ${artworkProjection}`

export const heroArtworkQuery = `*[_type == "artwork" && featured == true] | order(year desc) [0] ${artworkProjection}`

export const artistQuery = `*[_type == "artist"][0]{
  name,
  biography,
  statement,
  "portrait": portrait.asset->url,
  location,
  email,
  instagram
}`

export const exhibitionsQuery = `*[_type == "exhibition"] | order(year desc){
  "id": _id,
  year,
  title,
  type,
  venue,
  location,
  description
}`
