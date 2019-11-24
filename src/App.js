import React from 'react';
import { useRoutes } from 'hookrouter';

import Header from './components/header';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';

import './base.css';

const routes = {
  '/': () => <SearchPage />,
  '/search': () => <SearchPage />,
  '/favorites': () => <FavoritesPage />,
};

function App() {
  const routeResult = useRoutes(routes);

  return (
    <React.Fragment>
      <Header />
      {routeResult || <NotFoundPage />}
    </React.Fragment>
  );
}

export default App;
