import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { format } from 'date-fns';

import SubNavber from '../../components/SubNavbar';
import AboutMeCard from '../../components/AboutMeCard';

function BlogId({ pageProps }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { blog } = pageProps;
  return (
    <>
      <SubNavber pageTitle={blog.title} />
      <div className="container main-contents mt-5">
        <p className="module-title">リストに戻る</p>
        <div className="row">
          <div className="col-md-8">
            <div className="blog card p-4 shadow-sm">
              <span>{format(new Date(blog.createdAt), 'yyyy/MM/dd')}</span>
              <h1>{blog.title}</h1>
              {blog.tags.map(tag => (
                <span key={tag.id}>{tag.name}</span>
              ))}
              <img className="my-3" width="100%" height="auto" src={blog.image?.url} style={{ objectFit: 'contain' }} />
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
            </div>
          </div>
          <div className="col-md-4">
            <AboutMeCard />
          </div>
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
