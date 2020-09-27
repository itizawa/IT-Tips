import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { format } from 'date-fns';

function BlogCard({ blog }) {
  const text = blog.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
  return (
    <div className="card p-4 shadow-sm">
      <div className="row">
        <div className="col-md">
          <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
            <img role="button" width="100%" height="auto" src={blog.image?.url} style={{ objectFit: 'contain' }} />
          </Link>
        </div>
        <div className="col-md">
          <span>{format(new Date(blog.createdAt), 'yyyy/MM/dd')}</span>
          <br />
          <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
            <a className="tips-card-title">
              {blog.title}
            </a>
          </Link>
          <p>{`${text.substr(0, 80)}...`}</p>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
