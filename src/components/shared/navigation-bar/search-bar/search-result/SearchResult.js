import React from 'react';

import './SearchResult.scss';

// components
import dodoImgPath from '@images/eugy/eugy_dodo.png'
import SearchResultItem from './SearchResultItem'

const dummyItem = {
  name: 'Dodo',
  id: 'dodo',
  price: '18.00',
  imgPath: dodoImgPath
}
function SearchResult (props) {
  return (
    <div className="search-result-container">
      <div className="search-result__result-number">1 Result</div>

      <ul className="search-result__result-list">
        <SearchResultItem { ...dummyItem } />
      </ul>
    </div>
  )
};

export default SearchResult;