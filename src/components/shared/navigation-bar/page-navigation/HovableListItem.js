import React, { Icon } from 'react'

function HovableListItem ({
  classes = '',
  onClick = null,
  children,
  hoverContent = null
}) {
  const classStr = `navigation-bar__hovable-item ${classes}`

  return (
    <li className={classStr}>
      <span className="text-link"
        onClick={onClick}>
          <span className="text">{children}</span>
          <Icon>expand_more</Icon>
      </span>

      <div className="navigation-bar__hovable-item__hover-content">
        { hoverContent }
      </div>
    </li>
  )
}

export default HovableListItem