import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../../components/cover-image'
import {RichText} from 'prismic-reactjs';

import { linkResolver } from '../../prismic-config';
import { gearsPageQuery } from '../../lib/api';

import ProductPage from '../../components/product-page'

export default function Index({props}){
  console.log(props)
  return(
    <div>
      <ProductPage test={allPosts}/>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await gearsPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}
