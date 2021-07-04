import React from 'react';
import FoldableItem from './DrawerItemFoldable';

import { shopMenuListData } from '@components/shared/data.js'

const SubListItem = ({ name, imgPath }) => (
  <li className="drawer__menu-sub-item shop">
    <span className="img-container">
      <img className="img" src={imgPath} alt={name} />
    </span>

    <span className="label">{name}</span>
  </li>
)

function DrawerItemShop ({ children }) {
  return <FoldableItem  classes="shop"
    InnerListItem={SubListItem}
    innerListData={shopMenuListData}
  >{ children }</FoldableItem>
};

export default DrawerItemShop;