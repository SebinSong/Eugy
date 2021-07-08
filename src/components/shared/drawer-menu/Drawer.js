import React, { Icon } from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';

// scss
import './Drawer.scss';
// components
import DrawerItem from './DrawerItem';
import OurStoryItem from './foldable/DrawerItemOurStory'
import ShopItem from './foldable/DrawerItemShop'

// drawer control
import { closeDrawer } from '@store/features/drawerSlice.js'

function Drawer (props) {
  const dispatch = useDispatch()

  const isDrawerOpen = useSelector(state => state.drawer.isOpen)
  const classStr = `drawer-container ${isDrawerOpen ? 'is-open' : ''}`

  return (
    <div className={classStr}>
      <div className="drawer__backdrop"
        onClick={() => dispatch(closeDrawer())}></div>

      <div className="drawer__menu-container">
        <div className="drawer__menu-header">
          <Icon classes="drawer__close-btn"
            onClick={() => dispatch(closeDrawer())}>close</Icon>
        </div>

        <ul className="drawer__menu-list">
          <DrawerItem>Home</DrawerItem>
          <ShopItem>Shop</ShopItem>
          <DrawerItem>How to make</DrawerItem>
          <OurStoryItem>Our Story</OurStoryItem>
          <DrawerItem>Giving back</DrawerItem>
          <DrawerItem>Contact us</DrawerItem>
          <DrawerItem>Retailer login</DrawerItem>
        </ul>
      </div>
    </div>
  )
};

export default Drawer;