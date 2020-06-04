import Container from '../../components/container'
import ProductListing from '../../components/product-listing'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import { getAllPostsForProducts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ preview, allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
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
