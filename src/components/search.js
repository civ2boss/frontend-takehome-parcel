import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  setResults: PropTypes.func,
};

export default Search;
