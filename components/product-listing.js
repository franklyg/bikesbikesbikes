import ProductPostPreview from '../components/product-post-preview'

export default function productListing({ product_posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {product_posts.map(({ node }) => (
          <ProductPostPreview
            key={node._meta.uid}
            title={node.product_title}
            coverImage={node.product_coverimage}
            slug={node._meta.uid}
          />
        ))}
      </div>
    </section>
  )
}
