import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../hocs/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageLoading from '../components/organisms/loading';
import Footer from '../hocs/footer';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    }
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://xolanibukhosini.netlify.app/images/xeImage.jpg" />
      </Head>
      <Navbar />
      {isLoading && <PageLoading />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
