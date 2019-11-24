import React, { useState } from 'react';
import { useRoutes, useRedirect } from 'hookrouter';

import useLocalStorage from './hooks/useLocalStorage';

import Header from './components/header';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';

import './base.css';

const routes = {
  '/search': () => (favorites, setFavorites) => (
    <SearchPage favorites={favorites} setFavorites={setFavorites} />
  ),
  '/favorites': () => (favorites, setFavorites) => (
    <FavoritesPage favorites={favorites} setFavorites={setFavorites} />
  ),
};

function App() {
  useRedirect('/', '/search');
  const routeResult = useRoutes(routes);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  return (
    <React.Fragment>
      <Header />
      {routeResult(favorites, setFavorites) || <NotFoundPage />}
    </React.Fragment>
  );
}

export default App;
