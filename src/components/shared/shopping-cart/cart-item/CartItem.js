import React from 'react';

// components
import ItemCounter from '../item-counter/ItemCounter.js'

import './CartItem.scss';

function CartItem ({
  name = '', imgName, price = ''
}) {
  const onCounterValueChange = (newVal) => {
    console.log('changed value: ', newVal)
  }

  const onRemoveClick = () => {
    console.log('remove clicked!')
  }

  return (
    <li className="cart__list-item">
      <span className="img-container">
        <img src={require(`@images/eugy/${imgName}`).default}
          alt={name}
          loading="lazy" />
      </span>

      <span className="item-info">
        { name && <span className="name">{name}</span> }
        { price && <span className="price">$ {price}</span> }
        
        <span className="item-info__action">
          <ItemCounter onValueChange={onCounterValueChange} />

          <button className="item-info__item-remove-btn"
            onClick={onRemoveClick}>remove</button>
        </span>
      </span>
    </li>
  )
}

export default CartItem;