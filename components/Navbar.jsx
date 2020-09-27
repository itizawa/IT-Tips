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
      </div>
    </nav>
  );
}
export default Navbar;
