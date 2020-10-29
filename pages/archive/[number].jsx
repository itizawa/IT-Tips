import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import SubNavber from '../../components/SubNavbar';
import BlogCard from '../../components/blog/BlogCard';
import AboutMeCard from '../../components/AboutMeCard';

function Home(props) {
  const { blogs, isExistNextPage, isExistPreviewPage } = props.pageProps;
  const { number } = props.router.query;

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
              {isExistPreviewPage && (
                <Link href={`/archive/${parseInt(number) - 10}`}>
                  <button type="button" className="btn btn-info text-snow">
                    前のページ
                  </button>
                </Link>
              )}
              {isExistNextPage && (
                <Link href={`/archive/${parseInt(number) + 10}`}>
                  <button type="button" className="btn btn-info text-snow ml-auto">
                    次のページ
                  </button>
                </Link>
              )}
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


export const getServerSideProps = async(context) => {
  const { number } = context.params;

  const key = {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
    data: {},
  };
  const res = await axios.get(
    `https://itizawa.microcms.io/api/v1/blogs?orders=-publishedAt&offset=${number}`,
    key,
  );

  const { totalCount, offset } = res.data;
  const isExistNextPage = (totalCount - offset - 10) > 0;
  const isExistPreviewPage = offset > 0;

  return {
    props: {
      blogs: res.data.contents,
      isExistNextPage,
      isExistPreviewPage,
    },
  };
};

Home.propTypes = {
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

export default Home;
