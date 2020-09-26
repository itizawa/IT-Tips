import React from 'react';
import Head from 'next/head';

import '../styles/global.scss';

import Navbar from '../components/Navbar';

function Page(pageProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <Navbar />
      <pageProps.Component {...pageProps} />
    </>
  );
}

export default Page;
