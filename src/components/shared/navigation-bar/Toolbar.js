import React, { 
  Icon,
  useContext
} from 'react'

import NavigationContext from '@contexts/navigation-context.js'

const Toolbar = (props) => {
  const {
    toggleSearchBar
  } = useContext(NavigationContext);

  return (
    <ul className="navigation-bar__toolbar">
      <li onClick={toggleSearchBar}>
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