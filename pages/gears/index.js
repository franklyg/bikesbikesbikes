import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../../components/cover-image'
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

        // Product Card
        if (slice.__typename === 'Page_gearsBodyProduct_card') {
          const productCardItem = [slice].map(function(productRow, productRowIndex){
            return(
              <div className="grid grid-cols-2 md:grid-cols-4 col-gap-4 row-gap-20 md:row-gap-32 mb-8" key={productRowIndex}>

                {productRow.fields.map(function(card, cardIndex){
                  return(
                    <a href={card.product_card_link.url} className="shadow-small product-card hover:shadow-medium transition-shadow duration-200" key={cardIndex} target="_blank">
                      <div>
                        <div className="product-card-image h-56">
                          <CoverImage
                            title={RichText.asText(card.product_card_title)}
                            url={card.product_card_image.url}
                          />
                        </div>
                        <div className="text-3xl leading-snug p-4">
                            <RichText render={card.product_card_title} />
                            <RichText render={card.product_card_price} />
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            )
          })
          return productCardItem;
          // Product Specific
        }else if(slice.__typename === 'Page_gearsBodyProduct_page_specific_link') {
            const productSpecificItem = slice.fields.map(function(pageSpecific, pageSpecificIndex){
              return (
                <div className="product-card grid grid-cols-2 flex items-center shadow-small hover:shadow-medium transition-shadow duration-200 mb-8 grid-cols-2" key={pageSpecificIndex}>
                  <div className="product-card-image h-64">
                    <CoverImage
                      title={RichText.asText(pageSpecific.product_page)}
                      url={pageSpecific.product_image.url}
                    />
                  </div>
                  <div className="text-3xl leading-snug text-center">
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
                <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">gears.</h1>
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
