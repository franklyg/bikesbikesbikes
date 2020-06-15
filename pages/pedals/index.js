import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'

export default function PedalsPage({ preview, allPosts }) {
  return (
    <>
      <Layout>
        <Container>
          <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">pedals.</h1>
        </Container>
      </Layout>
    </>
  )
}