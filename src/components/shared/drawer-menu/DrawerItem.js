import React from 'react';

function DrawerItem ({ 
  children,
  onClick
}) {
  return (
    <li className="drawer__list-item"
      onClick={onClick}>
      <button className="drawer__list-item-btn">{children}</button>
    </li>
  )
};

export default DrawerItem;