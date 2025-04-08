import {createClient} from '@sanity/client'

const sanityClient = createClient({
  projectId: 'yq8gtfsy',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  perspective: 'previewDrafts',
  stega: {
    studioUrl: 'http://localhost:3333'
  }
})

export default sanityClient

export async function getAllNovosti() {
  return await sanityClient.fetch(
    `*[_type == "novost"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category
    }`
  )
}

export async function getNovosti() {
  return await sanityClient.fetch(
    `*[_type == "novost" && defined(category) && category == "novost" && publishedAt <= now()] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category
    }`
  )
}

export async function getPublicCalls(category: 'javni-oglasi-aktivni' | 'javni-oglasi-arhivirani') {
  return await sanityClient.fetch(
    `*[_type == "novost" && defined(category) && category == $category && publishedAt <= now()] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category,
      mainImage{
        asset->{url},
        alt
      },
      body
    }`,
    { category }
  )
}
