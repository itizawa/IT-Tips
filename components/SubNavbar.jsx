import React from 'react';
import Link from 'next/link';

function SubNavbar() {
  return (
    <nav className="navbar navbar-light bg-tipsblue tips-subnav">
      <div className="container">
        <div className="mr-auto">
          <Link href="/">
            <a className="text-snow">
              IT Tips トップ
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default SubNavbar;
