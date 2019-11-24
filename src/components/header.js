import React from 'react';
import { A } from 'hookrouter';

function Nav() {
  return (
    <React.Fragment>
      <A href="/">Search Page</A>
      <A href="/favorites">Favorites Page</A>
    </React.Fragment>
  );
}

function Header() {
  return (
    <React.Fragment>
      <h1>Ruby Gems search app</h1>
      <Nav />
    </React.Fragment>
  );
}

export default Header;
