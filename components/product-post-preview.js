import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  product_title,
  product_coverimage,
  product_link,
  product_date,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={product_link} href={product_link}>
          <a className="hover:underline">
            <RichText render={product_title} />
          </a>
        </Link>
      </h3>
    </div>
  )
}
