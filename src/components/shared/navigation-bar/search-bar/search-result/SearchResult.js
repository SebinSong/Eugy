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

function SearchResult (props) {
  const { value } = useContext(SearchBarContext);
  const dataToShow = filterSearchData(value())

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

// filtering logic of the search result
function filterSearchData (value) {
  const currentInputValue = value.trim()

  if (!currentInputValue)
    return [];

  const checkIfContains = item => {
    const productName = item.name.toLowerCase()
    const value = currentInputValue.toLowerCase()
    const foundIndex = productName.indexOf(value)

    if (foundIndex >= 0) {
      // store the index to use in sorting the items later
      item.searchIndex = foundIndex
      return true;
    } else
      return false;
  }

  const filteredResult = searchResultData.slice().filter(checkIfContains);

  // sort the search result in the descending order.
  filteredResult.sort((a, b) => a.searchIndex - b.searchIndex)

  return filteredResult;
}

export default SearchResult;