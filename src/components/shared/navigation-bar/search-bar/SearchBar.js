import React from 'react';

import './SearchBar.scss';

// components
import SearchBarInput from './search-bar-input/SearchBarInput'
import SearchResult from './search-result/SearchResult'

function SearchBar (props) {
  return (
    <div className="search-bar-container">
      <SearchBarInput />
      <SearchResult />
    </div>
  )
};

export default SearchBar;