import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container">
        <div className="mr-auto">
          <Link href="/">
            <a>
              <img alt="logo" src="/tips-logov2@2x.png" />
            </a>
          </Link>
        </div>
        <div className="d-flex">
          <input className="form-control mr-2" type="search" placeholder="サイト内検索" aria-label="Search" />
          <button className="btn btn-outline-light" type="button">Search</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
