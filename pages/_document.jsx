/* eslint-disable max-len */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { existsGaId, GA_ID } from '../lib/gtag';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {/* Google Analytics */}
          {existsGaId ? (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          ) : null}
          <meta property="og:url" content="https://it-tips.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="It-Tips" />
          <meta
            property="og:description"
            content="「IT Tips」は、「20代と30代の若手社会人のIT知識を底上げする」をテーマに、管理人の実務経験を通じて獲得した知見や最新の技術情報/Tipsを広くお届けするためのWebメディアです。"
          />
          <meta name="twitter:site" content="@IT_Tips_dev" />
          {/* Favicon */}
          <link rel="icon" href="/favicon/tips-favicon.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/tips-favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon/tips-favicon.svg" sizes="192x192" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    );
  }

}
