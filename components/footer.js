import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-20 mt-20">
      <Container>
        <div className="flex grid grid-cols-1 md:grid-cols-2 row-gap-10 col-gap-10">

          <div className="footer-links">
            <h3 className="font-poppins font-bold text-2xl">For Customers</h3>
            <div className="my-4 flex flex-col">
              <Link href="/privacy-policy">
                <a className="mb-3">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms-and-conditions">
                <a className="mb-3">
                  Terms & Conditions
                </a>
              </Link>
            </div>
            <div className="footer-feedback">
              <h3 className="font-poppins font-bold text-2xl">Feedback & Support</h3>
              <p className="my-3"><a href="mailto:support@ineedbikeparts.com">Click here to contact us.</a></p>
            </div>
          </div>

          <div className="footer-subscribe p-8 shadow-lg rounded-sm">
            <h3 className="font-poppins font-bold text-2xl">Subscribe to our mailing list!</h3>
            <p className="mt-3 mb-6">Get the lastest on what's coming out!</p>
            <form>
              <input />
              <button></button>
            </form>
          </div>


        </div>
      </Container>
    </footer>
  )
}
