import React, { useState } from 'react';

import "./DrawerItemFoldable.scss";

function DrawerItemFoldable ({
  children = null,
  InnerListItem = null,
  innerListData = []
}) {
  const [isOpen, updateIsOpen] = useState(false);
  const toggleList = () => updateIsOpen(v => !v)
  const renderInnerList = innerListData.length > 0 && Boolean(InnerListItem)

  return (
    <li className={`drawer__list-item-foldable ${isOpen ? 'is-open' : ''}`}>
      <span className="btn-container"
        onClick={toggleList}>
        <button className="drawer__list-item-btn">{children}</button>
      
        <span className="mi drawer__list-item-arrow">expand_more</span>
      </span>

      {
        renderInnerList &&
        <ul className="drawer__list-item-foldable__inner-list">
          { 
            innerListData.map(
              item => <InnerListItem key={item.id} { ...item }/>
            )
          }
        </ul>
      }
    </li>
  )
};

export default DrawerItemFoldable;