import React, { Icon } from 'react'

const Toolbar = (props) => {
  return (
    <ul className="navigation-bar__toolbar">
      <li>
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