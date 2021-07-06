import React, {
  useContext
} from 'react';

// context
import SearchBarContext from '@contexts/search-bar-context.js'

const HighLightName = ({ 
  name, searchIndex
}) => {
  const length = useContext(SearchBarContext).value().length
  const [before, highLighted, after] = [
    name.slice(0, searchIndex),
    <span className="highlighted">
      {name.slice(searchIndex, searchIndex + length)}
    </span>,
    name.slice(searchIndex + length)
  ]

  return (
    <span className="name">
      {before}{highLighted}{after}
    </span>
  )
}


function SearchResultItem ({
  name, imgName, price, searchIndex
}) {

  return (
    <li className="search-result__list-item">
      <span className="img-container">
        <img src={require(`@images/eugy/${imgName}`).default} alt={name} />
      </span>

      <span className="product-info">
        <HighLightName name={name} searchIndex={searchIndex} />
        <span className="price">$ {price}</span>
      </span>
    </li>
  )
};

export default SearchResultItem;