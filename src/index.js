import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';
import Results from './components/results';

import './base.css';

function App() {
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

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
