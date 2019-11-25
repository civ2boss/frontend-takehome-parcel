import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Search from '../components/search';
import Results from '../components/results';

function SearchPage({ favorites, setFavorites }) {
  const [results, setResults] = useState([]);

  return (
    <React.Fragment>
      <Search setResults={setResults} />
      <Results
        results={results}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </React.Fragment>
  );
}

SearchPage.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};

export default SearchPage;
