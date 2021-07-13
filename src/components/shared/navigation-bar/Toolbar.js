import React, { Icon } from 'react'

import { useDispatch } from 'react-redux'
import { toggleSearchbar } from '@store/features/searchbarSlice.js'
import { openCart } from '@store/features/cartSlice.js'

const Toolbar = (props) => {
  const dispatch = useDispatch()

  return (
    <ul className="navigation-bar__toolbar">
      <li onClick={() => dispatch(toggleSearchbar())}>
        <Icon classes="navigation-bar__icon"
          name="search" />
      </li>
      
      <li onClick={() => dispatch(openCart())}>
        <Icon classes="navigation-bar__icon"
          name="shopping_cart" />
      </li>
    </ul>
  )
}

export default Toolbar