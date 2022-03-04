import '../styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="年号コンバーター" />
        <meta property="og:description" content="年号を入力すると生まれ年の変換をしてくれます" />
        <meta property="og:url" content="https://converter-of-era.vercel.app/" />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itizawa_pen" />
        <meta name="twitter:creator" content="@itizawa_pen" />

        <title>元号コンバーター</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
