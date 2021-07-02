import React from 'react';
import FoldableItem from './DrawerItemFoldable';

function DrawerItemOurStory ({ 
  children,
  onClick = null
}) {
  return <FoldableItem>{ children }</FoldableItem>
};

export default DrawerItemOurStory;