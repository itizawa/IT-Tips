import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { format } from 'date-fns';

import Head from 'next/head';
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
      <Head>
        <title>{blog.title}</title>
        <meta property="og:type" content="article" />
      </Head>
      <SubNavber pageTitle={blog.title} />
      <div className="container main-contents mt-5">
        <p className="module-title">
          <Link href="/">
            <a>
              リストに戻る
            </a>
          </Link>
        </p>
        <div className="row">
          <div className="col-md-8 mb-5">
            <div className="blog card p-4 shadow-sm">
              <span>{format(new Date(blog.createdAt), 'yyyy/MM/dd')}</span>
              <h1>{blog.title}</h1>
              <div>
                {blog.tags.map(tag => (
                  <span className="badge bg-purple rounded-pill" key={tag.id}>{tag.name}</span>
                ))}
              </div>
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
