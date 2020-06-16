import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../components/cover-image'
import {RichText} from 'prismic-reactjs';

class ProductPage extends React.Component{

  constructor(props, {posts}) {
    super(props);
    this.state = {
      document: props
    };
  }

  render() {

    if (this.state.document) {

      const document = this.state.document;
      console.log(document)

    } else {
      return null;
    }

    return(
      <div>
        <h1>{this.props.test}</h1>
      </div>
    )

  }

}

export default ProductPage;
