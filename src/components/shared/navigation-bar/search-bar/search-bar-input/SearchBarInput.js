import React from 'react';

import './SearchBarInput.scss';

function SearchBarInput (props) {
  return (
    <span className="search-input-container">
      <button className="mi search-input__search-btn">search</button>

      <input className="search-input__input"
        placeholder="Search ..."
        type="text" />

      <button className="mi search-input__close-btn">close</button>
    </span>
  )
};

export default SearchBarInput;