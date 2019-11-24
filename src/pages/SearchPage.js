import React, { useState } from 'react';

import Search from '../components/search';
import Results from '../components/results';

function SearchPage() {
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

export default SearchPage;
