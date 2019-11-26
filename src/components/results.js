import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FavoritesContext } from './FavoritesContext';
import FavoriteButton from './favorite-button';

function Results({ results }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
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
            <li className="gem" key={sha} data-testid={sha}>
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
              <FavoriteButton result={result} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
