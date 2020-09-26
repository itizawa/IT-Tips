import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Link from 'next/link';
import SubNavber from '../components/SubNavbar';

function Home({ pageProps }) {
  const { blogs } = pageProps;

  return (
    <>
      <SubNavber />
      <div className="container main-contents">
        <p className="new-articles-title">新着記事</p>
        {blogs.map(blog => (
          <React.Fragment key={blog.id}>
            <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
              <a>
                <h2>{blog.title}</h2>
              </a>
            </Link>
            {blog.tags.map(tag => (
              <React.Fragment key={tag.id}>
                <span>{tag.name}</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
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
