import Container from '../components/container'
import ProductListing from '../components/product-listing'
import Layout from '../components/layout'
import HeroImage from '../components/hero-image'
import { getAllPostsForProducts } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout preview={preview}>
        <HeroImage />
        <Container>
          {morePosts.length > 0 && <ProductListing posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForProducts(previewData)
  return {
    props: { preview, allPosts },
  }
}
