import React from 'react';
import { A } from 'hookrouter';

function Nav() {
  return (
    <React.Fragment>
      <ul className="nav">
        <li>
          <A href="/search">Search</A>
        </li>
        <li>
          <A href="/favorites">Favorites</A>
        </li>
      </ul>
    </React.Fragment>
  );
}

function Header() {
  return (
    <React.Fragment>
      <header>
        <h1>Ruby Gems search app</h1>
        <Nav />
      </header>
    </React.Fragment>
  );
}

export default Header;
