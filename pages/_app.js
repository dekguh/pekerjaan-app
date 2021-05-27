import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../comps/organisms/Navbar';
import '../styles/globals.css';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
