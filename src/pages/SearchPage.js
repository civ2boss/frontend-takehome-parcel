import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { FavoritesContext } from '../components/FavoritesContext';
import Search from '../components/search';
import Results from '../components/results';

function SearchPage() {
  const [results, setResults] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <React.Fragment>
      <Search setResults={setResults} />
      <Results results={results} />
    </React.Fragment>
  );
}

export default SearchPage;
