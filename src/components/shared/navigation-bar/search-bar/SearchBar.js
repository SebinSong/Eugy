import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './SearchBar.scss';

// context
import SearchBarContext from '@contexts/search-bar-context.js'

// components
import SearchBarInput from './search-bar-input/SearchBarInput'
import SearchResult from './search-result/SearchResult'

function SearchBar (props) {
  const [inputValue, updateInputValue] = useState('')

  const onSearchBarInput = ({ target }) => {
    const { value } = target
    updateInputValue(value)
  }

  const isSearchbarOn = useSelector(({ searchbar }) => searchbar.isOpen)
  const searchBarApi = {
    value: () => inputValue,
    clearValue: () => updateInputValue('')
  }

  return (
    <SearchBarContext.Provider value={searchBarApi}>
      <div className={`search-bar-container ${isSearchbarOn ? 'is-on' : ''}`}>
        <SearchBarInput 
          value={inputValue}
          onInput={onSearchBarInput} />

        <SearchResult />
      </div>
    </SearchBarContext.Provider>
  )
};

export default SearchBar;