import React, { Icon } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearchbar } from '@store/features/searchbarSlice.js'


const Toolbar = (props) => {
  const dispatch = useDispatch()

  return (
    <ul className="navigation-bar__toolbar">
      <li onClick={() => dispatch(toggleSearchbar())}>
        <Icon classes="navigation-bar__icon"
          name="search" />
      </li>
      
      <li>
        <Icon classes="navigation-bar__icon"
          name="shopping_cart" />
      </li>
    </ul>
  )
}

export default Toolbar