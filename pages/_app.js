import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../comps/organisms/Footer';
import Navbar from '../comps/organisms/Navbar';
import '../styles/globals.css';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer classes='margin-top-50' />
  </>
  )
}

export default MyApp
