import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './base.css';

export const RUBY_GEMS_API = 'http://localhost:3000/api/v1/search.json';

function Search({ setResults }) {
  const [value, setValue] = useState();

  useEffect(() => {
    if (value) {
      fetch(`${RUBY_GEMS_API}?query=${value}`)
        .then(response => {
          if (response.status !== 200) {
            console.log(
              `Looks like there was a problem. Status Code: ${response.status}`
            );
            return;
          }

          // Examine the text in the response
          response.json().then(data => {
            console.log(data);
            setResults(data);
          });
        })
        .catch(err => {
          console.log('Fetch Error :-S', err);
        });
    }
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log({ data });
    setValue(data.get('name'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" />
      <button className="btn blue" type="submit">
        Search Gems
      </button>
    </form>
  );
}

function Results({ results }) {
  return (
    <div className="results">
      <ul>
        {results.map(({ sha, name, version, project_uri, info, downloads }) => (
          <li key={sha}>
            <a className="gem" href={project_uri}>
              <span className="info">
                <h2 className="name">
                  {name}
                  <span className="version">{version}</span>
                </h2>
                <p className="desc">{info}</p>
              </span>
              <p className="downloads-count">
                {downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                <span className="downloads-heading">Downloads</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [results, setResults] = useState([]);

  return (
    <React.Fragment>
      <Search setResults={setResults} />
      <Results results={results} />
    </React.Fragment>
  );
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
