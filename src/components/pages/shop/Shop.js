import React from 'react';

import './Shop.scss';

// components
import {
  CategoryShowcaseBar
} from './categories'
import SortDropdown from '@components/shared/sort-dropdown'

// assets
import featureImage from '@images/pages/shop/main-image.png'

function Shop (props) {
  return (
    <main className="page shop">
      <div className="page-shop__feature-img-container">
        <img alt='shop feature img'
          src={featureImage} />
      </div>

      <div className="page__content">
        <div className="page__title">
          <span className="title-sub">Shop</span>

          <h1 className="title-main">All Products</h1>
        </div>

        <CategoryShowcaseBar />

        <div className="page-shop__sort-container">
          <SortDropdown />
        </div>

        <div>Hello World!!</div>
      </div>
    </main>
  )
};

export default Shop;