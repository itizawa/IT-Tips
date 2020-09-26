import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SubNavber from '../components/SubNavbar';
import BlogCard from '../components/blog/BlogCard';

function Home({ pageProps }) {
  const { blogs } = pageProps;

  return (
    <>
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
            <div className="card p-3 side-card">
              <p className="side-card-title">IT Tips とは</p>
              <img width="100%" alt="logo" src="/tips-logov2@2x.png" />
              <p>
                <strong>若手Webエンジニアのための情報メディア</strong>
                <br />
                「IT Tips」は、「20代と30代の若手Webエンジニアを応援する」をテーマに、若手Webエンジニアの活躍の様子や、最新の技術情報/Tipsを広くお届けするためのWebメディアです。
              </p>
            </div>
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
