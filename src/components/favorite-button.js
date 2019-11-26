import React from 'react';
import PropTypes from 'prop-types';

import { useFavorites } from './FavoritesProvider';

function FavoriteButton({ result }) {
  const { favorites, setFavorites } = useFavorites();

  const handleFavorite = () => {
    const foundIndex = favorites.findIndex(entry => entry.sha === result.sha);
    if (foundIndex >= 0) {
      const newFavorites = [...favorites];
      newFavorites.splice(foundIndex, 1);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, result]);
    }
  };

  return (
    <button
      type="button"
      aria-label="Favorite"
      className="favorite"
      onClick={handleFavorite}
    >
      {favorites.find(entry => entry.sha === result.sha) ? (
        <i className="fas fa-heart" />
      ) : (
        <i className="fal fa-heart" />
      )}
    </button>
  );
}

FavoriteButton.propTypes = {
  result: PropTypes.object,
};

export default FavoriteButton;
