import React, {
  useContext
} from 'react';

import './SearchResult.scss';

// components
import SearchResultItem from './SearchResultItem'

// context
import SearchBarContext from '@contexts/search-bar-context.js'

// data
import searchResultData from '@components/shared/view-data/eugy_data.js'

const checkIfContains = (name, value) => {
  name = name.toLowerCase()
  value = value.trim().toLowerCase()

  return name.includes(value)
}

function SearchResult (props) {
  const currentInputValue = useContext(SearchBarContext).value().trim();
  const dataToShow = currentInputValue ? 
    searchResultData.filter(
      item => checkIfContains(item.name, currentInputValue)
    ) : [];

  if (dataToShow.length === 0)
    return null;

  return (
    <div className="search-result-container">
      <div className="search-result__result-number">{dataToShow.length} Result</div>

      <ul className="search-result__result-list">
        {
          dataToShow.map(
            item => <SearchResultItem
              key={item.id}
              { ...item } />
          )
        }
      </ul>
    </div>
  )
};

export default SearchResult;