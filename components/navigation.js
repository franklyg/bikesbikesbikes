import Link from 'next/link'
import Container from '../components/container'

export default function mainNavigation({ posts }) {


  function mobileMenu(){

    const menuButton = document.querySelector('.menu-button');
    const linkCollection = document.querySelector('.link-collection');

    menuButton.addEventListener('click', function(){
      console.log('yes', this)
      this.classList.toggle('active')
      linkCollection.classList.toggle('active')
    })

  }


  return (
    <nav className="navigation flex items-center shadow-small h-20">
      <Container>
        <div className="grid grid-cols-2 flex flex-row flex-auto items-center font-poppins">
          <Link href="/">
            <a className="logo h-16 w-24">
              Logo
            </a>
          </Link>
          <div className="link-collection flex flex-col md:flex-row md:justify-end">
            <Link href="/gears">
              <a className="link-item px-6 md:px-3">
                Gears
              </a>
            </Link>
            <Link href="/handle-bars">
              <a className="link-item px-6 md:px-3">
                Handle Bars
              </a>
            </Link>
            <Link href="/pedals">
              <a className="link-item px-6 md:px-3">
                Pedals
              </a>
            </Link>
            <Link href="/wheels">
              <a className="link-item px-6 md:px-3">
                Wheels
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="menu-button w-8" onClick={mobileMenu}>
              <span className="bar h-1 mb-1"></span>
              <span className="bar h-1 mb-1"></span>
              <span className="bar h-1 mb-1"></span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}
