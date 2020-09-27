import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import '../styles/global.scss';

import Navbar from '../components/Navbar';

import * as gtag from '../lib/gtag';

function Page(pageProps) {

  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
