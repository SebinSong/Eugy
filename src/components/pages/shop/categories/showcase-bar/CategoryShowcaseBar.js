import React from 'react'

// components
import ShowcaseItem from './ShowcaseItem.js'

// data
import { ShopCategoryMenuData } from '@viewdata/data.js'

// scss
import './CategoryShowcaseBar.scss'


function CategoryShowcaseBar (props) {
  return (
    <div className="page-shop__category-showcase-bar-container">
      {
        ShopCategoryMenuData.map(
          (item) => <ShowcaseItem key={item.id} { ...item } />
        )
      }
    </div>
  )
}

export default CategoryShowcaseBar;