import React from 'react'

import ShopMenu from '@components/shared/navigation-bar/ShopMenu'

export default React.createContext({})

export const additionalContentMap = {
  'shop-menu': <ShopMenu />,
  'our-story': <div></div>
}