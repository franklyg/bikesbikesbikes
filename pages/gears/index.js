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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-gap-4 row-gap-4 md:row-gap-6 mb-6" key={productRowIndex}>
                {productRow.fields.map(function(card, cardIndex){
                  return(
                    <a href={card.product_card_link.url} className="shadow-small product-card hover:shadow-medium transition-shadow duration-200 border-solid border-2 border-gray-100 " key={cardIndex} target="_blank">
                      <div>
                        <div className="product-card-image h-64 md:h-56 lg:h-40 xl:h-64 pb-6" style={{background: 'url('+card.product_card_image.url+')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        </div>
                        <h3 className="product-name px-4 text-2xl py-2 font-poppins">
                          <RichText render={card.product_card_title} />
                        </h3>
                        <div className="px-4 pb-2 font-poppins">
                          <p className="product-price text-2xl font-bold pt-3 border-t-2 border-gray-200">
                            <RichText render={card.product_card_price} />
                          </p>
                        </div>
                      </div>
                      <div className="buy-tag font-bold py-2 px-4 font-abel rounded-bl-lg flex grid grid-cols-2 items-center justify-end  hidden md:block">
                        <span className="col-span-1">View Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z"/></svg>
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
              <Link href="${pageSpecific.product_page_link}" as={`${RichText.asText(pageSpecific.product_page_link)}`}>
                <a className="specific-product-item grid md:grid-cols-2 grid-cols-1 flex items-center shadow-small hover:shadow-medium transition-shadow duration-200 mb-6" key={pageSpecificIndex}>
                  <div className="product-card-image lg:h-110 sm:h-64 h-64" style={{background: 'url('+pageSpecific.product_image.url +')'}}>
                  </div>
                  <div className="specific-item-content text-6xl leading-snug p-4 text-center flex grid grid-cols-8 items-center justify-end lg:h-110 sm:h-64 h-64">
                    <div className="md:col-span-6 col-span-8 font-poppins font-bold">
                      <RichText render={pageSpecific.product_page_title}/>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-34 h-16 md:col-span-1 col-span-8 md:block hidden" viewBox="0 0 24 24"><path d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z"/></svg>
                  </div>
                </a>
              </Link>
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
                <div className="specific-pages mb-4 lg:mb-8 grid flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-4 md:col-gap-4 text-poppins">
                  <Link href="/gears/chains">
                    <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                      <span className="col-span-7">Chains</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </a>
                  </Link>
                  <Link href="/gears/chains">
                    <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                      <span className="col-span-7">Chains</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </a>
                  </Link>
                  <Link href="/gears/chains">
                    <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                      <span className="col-span-7">Chains</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </a>
                  </Link>
                  <Link href="/gears/chains">
                    <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                      <span className="col-span-7">Chains</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </a>
                  </Link>
                </div>
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
