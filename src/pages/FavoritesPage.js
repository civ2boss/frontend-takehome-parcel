import React from 'react';
import PropTypes from 'prop-types';

import Results from '../components/results';

function FavoritesPage({ favorites, setFavorites }) {
  return (
    <React.Fragment>
      {favorites.length > 0 ? (
        <React.Fragment>
          <h2 className="favorite-heading">Favorites</h2>
          <Results
            results={favorites}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </React.Fragment>
      ) : (
        <p className="no-favorites">No favorites yet</p>
      )}
    </React.Fragment>
  );
}

FavoritesPage.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};

export default FavoritesPage;
