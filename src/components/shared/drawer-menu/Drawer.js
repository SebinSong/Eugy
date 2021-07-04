import React, { 
  Icon,
  useContext
} from 'react';

// scss
import './Drawer.scss';
// components
import DrawerItem from './DrawerItem';
import OurStoryItem from './foldable/DrawerItemOurStory'
import ShopItem from './foldable/DrawerItemShop'

// context
import rootContext from '@contexts/root-context.js'

function Drawer (props) {
  const {
    isDrawerOpen,
    closeDrawer
  } = useContext(rootContext);
  const classStr = `drawer-container ${isDrawerOpen() ? 'is-open' : ''}`

  return (
    <div className={classStr}>
      <div className="drawer__backdrop"
        onClick={closeDrawer}></div>

      <div className="drawer__menu-container">
        <div className="drawer__menu-header">
          <Icon classes="drawer__close-btn"
            onClick={closeDrawer}>close</Icon>
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