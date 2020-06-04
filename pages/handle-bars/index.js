import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'

export default function HandleBarsPage({ preview, allPosts }) {
  return (
    <>
      <Layout>
        <Container>
          <h1 className="main-headline text-6xl font-bold">handle bars.</h1>
        </Container>
      </Layout>
    </>
  )
}
