import React from 'react';
import FoldableItem from './DrawerItemFoldable';

import { ourStoryMenuData } from '@components/shared/view-data/data.js'

const SubListItem = ({ name }) => (
  <li className="drawer__menu-sub-item our-story">{name}</li>
)

function DrawerItemOurStory ({ children }) {
  return <FoldableItem classes="our-story"
    InnerListItem={SubListItem}
    innerListData={ourStoryMenuData}>{ children }</FoldableItem>
};

export default DrawerItemOurStory;