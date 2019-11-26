import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useFavorites } from '../components/FavoritesProvider';
import Search from '../components/search';
import Results from '../components/results';

function SearchPage() {
  const [results, setResults] = useState([]);
  const { favorites, setFavorites } = useFavorites();

  return (
    <React.Fragment>
      <Search setResults={setResults} />
      <Results results={results} />
    </React.Fragment>
  );
}

export default SearchPage;
