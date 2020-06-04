import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
// import ProductCard from '../../components/product-card'
import Link from 'next/link'
import {RichText} from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config';

import { gearsPageQuery } from '../../lib/api'

class ProductCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      document: props
    };
  }

  render() {
    if (this.state.document) {
      const document = this.state.document;

      const productCards = document.allPosts[0].node.body.map(function(slice, index){


        if (slice.__typename === 'Page_gearsBodyProduct_card') {
          const productCardItem = [slice].map(function(productRow, productRowIndex){
            return(
              <div className="grid grid-cols-2 md:grid-cols-4 col-gap-4 row-gap-20 md:row-gap-32 mb-8" key={productRowIndex}>

                {productRow.fields.map(function(card, cardIndex){
                  return(
                    <div className="shadow-small product-card hover:shadow-medium transition-shadow duration-200" key={cardIndex}>
                      <div className="text-3xl leading-snug p-4">
                        <RichText render={card.product_card_title} />
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })
          return productCardItem;
        }else if(slice.__typename === 'Page_gearsBodyProduct_page_specific_link') {
            const productSpecificItem = slice.fields.map(function(pageSpecific, pageSpecificIndex){
              return (
                <div className="shadow-small product-card hover:shadow-medium transition-shadow duration-200 mb-8" key={pageSpecificIndex}>
                  <div className="text-3xl leading-snug p-4">
                    <RichText render={pageSpecific.product_page} />
                  </div>
                </div>
              );
            });
            return productSpecificItem;
          }else {
            // Return null by default
            return null;
          }
        })
      return (
        <div className="blog-content">
          <>
            <Layout>
              <Container>
                <h1 className="main-headline text-6xl font-bold mb-8">gears.</h1>
                {productCards}
              </Container>
            </Layout>
          </>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductCard;

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await gearsPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}
