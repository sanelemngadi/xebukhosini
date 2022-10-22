import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../hocs/header';
import Footer from '../hocs/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.netlify.com/v3/static/favicon/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
