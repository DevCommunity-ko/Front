import Head from 'next/head';

import wrapper from '../stores/configureStore';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MAGNET</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
