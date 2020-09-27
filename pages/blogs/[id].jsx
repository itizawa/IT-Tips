import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import SubNavber from '../../components/SubNavbar';

function BlogId({ pageProps }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { blog } = pageProps;
  return (
    <>
      <SubNavber />
      <div className="container">
        <div className="blog">
          <h1>{blog.title}</h1>
          {blog.tags.map(tag => (
            <React.Fragment key={tag.id}>
              <span>{tag.name}</span>
            </React.Fragment>
          ))}
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async() => {
  const key = {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
    data: {},
  };

  const res = await axios.get('https://itizawa.microcms.io/api/v1/blogs', key);
  const repos = await res.data;

  const paths = repos.contents.map(repo => `/blogs/${repo.id}`);
  return { paths, fallback: true };
};

export const getStaticProps = async(context) => {
  const { id } = context.params;

  const key = {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  };

  const res = await axios.get(
    `https://itizawa.microcms.io/api/v1/blogs/${id}`,
    key,
  );

  const blog = res.data;

  return {
    props: {
      blog,
    },
  };
};

BlogId.propTypes = {
  pageProps: PropTypes.object.isRequired,
};

export default BlogId;
