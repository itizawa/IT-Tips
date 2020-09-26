import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { format } from 'date-fns';

function BlogCard({ blog }) {
  const text = blog.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
  return (
    <div className="card p-4 shadow-sm">
      <div className="d-flex">
        <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
          <img role="button" width="230px" height="170px" src={blog.image?.url} style={{ objectFit: 'contain' }} />
        </Link>
        <div className="px-3">
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
