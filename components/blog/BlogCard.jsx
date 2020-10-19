import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { format } from 'date-fns';

function BlogCard({ blog }) {
  return (
    <div className="card p-4 shadow-sm">
      <div className="row">
        <div className="col-md">
          <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
            <img role="button" width="100%" height="auto" src={blog.image?.url} style={{ objectFit: 'contain' }} />
          </Link>
        </div>
      </div>
      <div className="col-md">
        <div className="d-md-flex">
          <small className="mr-3">記事投稿日：{format(new Date(blog.publishedAt), 'yyyy/MM/dd hh:ss')} </small>
          <br className="d-md-none d-block" />
          <small>最終更新日：{format(new Date(blog.updatedAt), 'yyyy/MM/dd hh:ss')}</small>
        </div>
        <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
          <a className="tips-card-title">
            {blog.title}
          </a>
        </Link>
        <br />
        {blog.tags.map(tag => (
          <span className="badge bg-purple rounded-pill mr-2" key={tag.id}>{tag.name}</span>
        ))}
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
