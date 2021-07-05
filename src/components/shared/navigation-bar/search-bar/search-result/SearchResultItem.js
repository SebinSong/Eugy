import React from 'react';

function SearchResultItem ({
  name, imgName, price
}) {
  return (
    <li className="search-result__list-item">
      <span className="img-container">
        <img src={require(`@images/eugy/${imgName}`).default} alt={name} />
      </span>

      <span className="product-info">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </span>
    </li>
  )
};

export default SearchResultItem;