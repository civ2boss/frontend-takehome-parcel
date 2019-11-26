import React, { useState } from 'react';
import { useRoutes, useRedirect } from 'hookrouter';

import useLocalStorage from './hooks/useLocalStorage';

import { FavoritesProvider } from './components/FavoritesProvider';
import Header from './components/header';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';

import './base.css';

const routes = {
  '/search': () => <SearchPage />,
  '/favorites': () => <FavoritesPage />,
};

function App() {
  useRedirect('/', '/search');
  const routeResult = useRoutes(routes);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  return (
    <FavoritesProvider value={{ favorites, setFavorites }}>
      <Header />
      {routeResult || <NotFoundPage />}
    </FavoritesProvider>
  );
}

export default App;
