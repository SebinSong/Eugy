import React, {
  useContext
} from 'react';

import './SearchBarInput.scss';

// context
import searchBarContext from '@contexts/search-bar-context.js'

function SearchBarInput ({
  onInput = null,
  value = ''
}) {
  const { clearValue } = useContext(searchBarContext);

  return (
    <span className="search-input-container">
      <button className="mi search-input__search-btn">search</button>

      <input className="search-input__input"
        onChange={onInput}
        value={value}
        placeholder="Search ..."
        type="text" />

      <button className="mi search-input__close-btn"
        onClick={clearValue}>close</button>
    </span>
  )
};

export default SearchBarInput;