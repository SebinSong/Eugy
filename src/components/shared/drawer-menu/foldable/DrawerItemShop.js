import React from 'react';
import FoldableItem from './DrawerItemFoldable';

function DrawerItemShop ({ 
  children,
  onClick
}) {
  return <FoldableItem>{ children }</FoldableItem>
};

export default DrawerItemShop;