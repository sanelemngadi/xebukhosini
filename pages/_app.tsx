import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../hocs/header';
import Footer from '../hocs/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
