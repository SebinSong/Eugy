import React from 'react';

function DrawerItem ({ children }) {
  return (
    <li className="drawer__list-item">
      <button className="drawer__list-item-btn">{children}</button>
    </li>
  )
};

export default DrawerItem;