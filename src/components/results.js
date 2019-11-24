import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton({ result, favorites, setFavorites }) {
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
    <button type="button" className="favorite" onClick={handleFavorite}>
      {favorites.find(entry => entry === result) ? (
        <i className="fas fa-heart" />
      ) : (
        <i className="fal fa-heart" />
      )}
    </button>
  );
}

function Results({ results, favorites, setFavorites }) {
  return (
    <div className="results">
      <ul>
        {results.map(result => {
          const {
            sha,
            name,
            version,
            project_uri: projectUri,
            info,
            downloads,
          } = result;
          return (
            <li className="gem" key={sha}>
              <span className="info">
                <h2 className="name">
                  <a href={projectUri}>
                    {name}
                    <span className="version">{version}</span>
                  </a>
                </h2>

                <p className="desc">{info}</p>
              </span>
              <p className="downloads-count">
                {downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                <span className="downloads-heading">Downloads</span>
              </p>
              <FavoriteButton
                result={result}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.array,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};

FavoriteButton.propTypes = {
  result: PropTypes.object,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};

export default Results;
