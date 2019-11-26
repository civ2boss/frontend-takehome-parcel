import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FavoritesContext } from '../components/FavoritesContext';
import Results from '../components/results';

function FavoritesPage() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <React.Fragment>
      {favorites.length > 0 ? (
        <React.Fragment>
          <h2 className="favorite-heading">Favorites</h2>
          <Results results={favorites} />
        </React.Fragment>
      ) : (
        <p className="no-favorites">No favorites yet</p>
      )}
    </React.Fragment>
  );
}

export default FavoritesPage;
