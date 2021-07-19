import React from 'react'

import './ShopItem.scss'

function ShopItem ({
  name, price, imgName, isNew = false
}) {
  return (
    <div className="shop-item-container">
      <span className="shop-item__img-container">
        <img alt={name}
          src={require(`@images/eugy/${imgName}`).default} />
      </span>

      <span className="shop-item__name">{name}</span>

      <span className="shop-item__price">$ {price}</span>

      <button className="is-primary shop-item__add-to-cart-btn">ADD TO CART</button>

      { isNew && <span className="shop-item__new-tag">NEW</span> }
    </div>
  )
}

export default ShopItem
