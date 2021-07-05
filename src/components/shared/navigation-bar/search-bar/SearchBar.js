import React, {
  useState,
  useContext
} from 'react';

import './SearchBar.scss';

// context
import NavigationBarContext from '@contexts/navigation-context.js'
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

  const { isSearchBarOn } = useContext(NavigationBarContext);
  const searchBarApi = {
    value: () => inputValue,
    clearValue: () => updateInputValue('')
  }

  return (
    <SearchBarContext.Provider value={searchBarApi}>
      <div className={`search-bar-container ${isSearchBarOn() ? 'is-on' : ''}`}>
        <SearchBarInput 
          value={inputValue}
          onInput={onSearchBarInput} />

        <SearchResult />
      </div>
    </SearchBarContext.Provider>
  )
};

export default SearchBar;