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
              <Link href="/cranksets">
                <a className="link-item px-6 md:px-3">
                  Cranksets
                </a>
              </Link>
              <Link href="/handlebars">
                <a className="link-item px-6 md:px-3">
                  Handlebars
                </a>
              </Link>
              <Link href="/saddles">
                <a className="link-item px-6 md:px-3">
                  Saddles
                </a>
              </Link>
              <Link href="/wheels">
                <a className="link-item px-6 md:px-3">
                  Wheels
                </a>
              </Link>
              <Link href="/frames">
                <a className="link-item px-6 md:px-3">
                  Frames
                </a>
              </Link>
              <Link href="/accessories">
                <a className="link-item px-6 md:px-3">
                  Accessories
                </a>
              </Link>
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
