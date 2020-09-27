import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function SubNavbar(props) {
  const { pageTitle } = props;

  return (
    <nav className="navbar navbar-light bg-tipsblue tips-subnav">
      <div className="container">
        <div className="mr-auto">
          <Link href="/">
            <a className="text-snow">
              IT Tips トップ
            </a>
          </Link>
          {pageTitle != null && (
            <span className="text-snow ml-2">
              {'>'}
              <span className="ml-2">{pageTitle}</span>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

SubNavbar.propTypes = {
  pageTitle: PropTypes.object.isRequired,
};

export default SubNavbar;
