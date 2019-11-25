import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RUBY_GEMS_API = 'http://localhost:3000/api/v1/search.json';

function Search({ setResults }) {
  const [value, setValue] = useState('');
  const [url, setUrl] = useState(`${RUBY_GEMS_API}?query=`);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(url);

      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      const json = await response.json();

      setResults(json);
    };

    if (value) {
      fetchResults();
    }
  }, [url]);

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`${RUBY_GEMS_API}?query=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        aria-label="Name"
        value={value}
        onChange={handleChangeValue}
      />
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
