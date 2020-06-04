import Link from 'next/link'
import Container from '../components/container'

export default function mainNavigation({ posts }) {
  return (
    <nav className="navigation p-3 shadow-small h-20 flex flex-row flex-auto items-center">
      <Container>
        <div className="grid grid-cols-2">
          <Link href="/">
            <a>
              Logo
            </a>
          </Link>
          <div className="link-collection">
            <Link href="/gears">
              <a className="link-item p-3">
                Gears
              </a>
            </Link>
            <Link href="/handle-bars">
              <a className="link-item p-3">
                Handle Bars
              </a>
            </Link>
            <Link href="/pedals">
              <a className="link-item p-3">
                Pedals
              </a>
            </Link>
            <Link href="/wheels">
              <a className="link-item p-3">
                Wheels
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}
