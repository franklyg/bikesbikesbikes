import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../components/cover-image'
import {RichText} from 'prismic-reactjs';

class ProductPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      document: props
    };
  }

  render() {
    
    console.log(this.state.document)

    if (this.state.document) {

      const document = this.state.document;
      console.log(document)

    } else {
      return null;
    }

    return(
      <div>
        <h1>k</h1>
      </div>
    )

  }

}

export default ProductPage;

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await gearsPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}
