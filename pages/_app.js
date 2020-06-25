import '../styles/index.scss'
import ReactGA from 'react-ga';



function MyApp({ Component, pageProps }) {
  const trackingId = "UA-34668039-1"; // Replace with your Google Analytics tracking ID

  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return <Component {...pageProps} />
}

export default MyApp
