import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Head from 'next/head';

import SubNavber from '../components/SubNavbar';
import BlogCard from '../components/blog/BlogCard';
import AboutMeCard from '../components/AboutMeCard';

function Home({ pageProps }) {
  const { blogs } = pageProps;

  return (
    <>
      <Head>
        <title>IT-Tips の最新記事一覧</title>
      </Head>
      <SubNavber />
      <div className="container main-contents mt-5">
        <p className="module-title">新着記事</p>
        <div className="row">
          <div className="col-md-8">
            {blogs.map(blog => (
              <div key={blog.id} className="mb-3">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
          <div className="col-md-4">
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
    'https://itizawa.microcms.io/api/v1/blogs',
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
