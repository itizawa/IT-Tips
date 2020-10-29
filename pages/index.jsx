import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import SubNavber from '../components/SubNavbar';
import BlogCard from '../components/blog/BlogCard';
import AboutMeCard from '../components/AboutMeCard';

function Home({ pageProps }) {
  const { blogs } = pageProps;

  return (
    <>
      <Head>
        <title>IT-Tips の最新記事一覧</title>
        <meta name="description" content="IT-Tips の最新記事一覧:「IT Tips」は、「若手社会人のIT知識を底上げする」をテーマに、管理人の実務経験を通じて獲得した知見や最新の技術情報/Tipsを広くお届けするためのWebメディアです。" />
      </Head>
      <SubNavber />
      <div className="container main-contents mt-3">
        <div className="row">
          <div className="col-lg-8">
            {blogs.map(blog => (
              <div key={blog.id} className="mb-3">
                <BlogCard blog={blog} />
              </div>
            ))}
            <div className="d-flex mb-5">
              <Link href="/archive/10">
                <button type="button" className="btn btn-info text-snow ml-auto">
                  次のページ
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <AboutMeCard />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async() => {
  const key = {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
    data: {},
  };
  const res = await axios.get(
    'https://itizawa.microcms.io/api/v1/blogs?orders=-publishedAt',
    key,
  );

  return {
    props: {
      blogs: res.data.contents,
    },
  };
};

Home.propTypes = {
  pageProps: PropTypes.object.isRequired,
};

export default Home;
