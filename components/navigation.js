import Link from 'next/link'
import Container from '../components/container'

class MainNavigation extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        showHideSidenav: 'not-active'
      }
  }

  getInitialState(){
    return {"showHideSidenav":"not-active"};
  }

  render(){
    return(
      <nav className="navigation flex items-center shadow-small h-20">
        <Container>
          <div className="grid grid-cols-2 flex flex-row flex-auto items-center font-poppins">
            <Link href="/">
              <a className="logo h-16 w-24">
                Logo
              </a>
            </Link>
            <div className={`link-collection flex flex-col md:flex-row md:justify-end ${this.state.showHideSidenav}`}>

              <div className="link-group">
                <Link href="/cranksets">
                  <a className="link-item px-6 md:px-3">
                    Cranksets
                  </a>
                </Link>
                <div className="link-dropdown md:py-6 px-6 md:px-3 md:w-48">
                  <Link href="/cranksets/chains">
                    <a>Chains</a>
                  </Link>
                  <Link href="/cranksets/pedals">
                    <a>Pedals</a>
                  </Link>
                  <Link href="/cranksets/chain-rings">
                    <a>Chain Rings</a>
                  </Link>
                  <Link href="/cranksets/bottom-brackets">
                    <a>Bottom Brackets</a>
                  </Link>
                </div>
              </div>

              <div className="link-group">
                <Link href="/handlebars">
                  <a className="link-item px-6 md:px-3">
                    Handlebars
                  </a>
                </Link>
                <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                  <Link href="/handlebars/grips">
                    <a>Grips</a>
                  </Link>
                  <Link href="/handlebars/shifters">
                    <a>Shifters</a>
                  </Link>
                  <Link href="/handlebars/brake-levers">
                    <a>Brake Levers</a>
                  </Link>
                  <Link href="/handlebars/stems">
                    <a>Stems</a>
                  </Link>
                  <Link href="/handlebars/headsets">
                    <a>Headsets</a>
                  </Link>
                </div>
              </div>

              <div className="link-group">
                <Link href="/saddles">
                  <a className="link-item px-6 md:px-3">
                    Saddles
                  </a>
                </Link>
                <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                  <Link href="/saddles/cushions">
                    <a>Cushions</a>
                  </Link>
                  <Link href="/saddles/seatposts">
                    <a>Seatposts</a>
                  </Link>
                </div>
              </div>

              <div className="link-group">
                <Link href="/wheels">
                  <a className="link-item px-6 md:px-3">
                    Wheels
                  </a>
                </Link>
                <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                  <Link href="/wheels/tires">
                    <a>Tires</a>
                  </Link>
                  <Link href="/wheels/rims">
                    <a>Rims</a>
                  </Link>
                  <Link href="/wheels/brake-pads">
                    <a>Brake Pads</a>
                  </Link>
                  <Link href="/wheels/tubes">
                    <a>Tubes</a>
                  </Link>
                  <Link href="/wheels/hubs">
                    <a>Hubs</a>
                  </Link>
                  <Link href="/wheels/spokes">
                    <a>Spokes</a>
                  </Link>
                </div>
              </div>

              {/*<Link href="/frames">
                <a className="link-item px-6 md:px-3">
                  Frames
                </a>
              </Link>*/}

              <div className="link-group">
                <Link href="/accessories">
                  <a className="link-item px-6 md:px-3">
                    Accessories
                  </a>
                </Link>
                <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                  <Link href="/accessories/bells">
                    <a>Bells</a>
                  </Link>
                  <Link href="/accessories/locks">
                    <a>Locks</a>
                  </Link>
                  <Link href="/accessories/lights">
                    <a>Lights</a>
                  </Link>
                </div>
              </div>

            </div>
            <div className="flex flex-col justify-center">
              <div className={`menu-button w-8 ${this.state.showHideSidenav}`} onClick={this.mobileMenu.bind(this)}>
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
  mobileMenu() {
    var css = (this.state.showHideSidenav === "not-active") ? "active" : "not-active";
    this.setState({
      "showHideSidenav" : css
    });
  }

}

export default MainNavigation;
