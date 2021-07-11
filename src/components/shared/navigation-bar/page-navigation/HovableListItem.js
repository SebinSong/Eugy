import React, { Icon } from 'react'

function HovableListItem ({
  classes = '',
  onClick = null,
  children
}) {
  const classStr = `navigation-bar__hovable-item ${classes}`

  return (
    <li className={classStr}>
      <span className="text-link"
        onClick={onClick}>
          <span className="text">{children}</span>
          <Icon>expand_more</Icon>
      </span>
    </li>
  )
}

export default HovableListItem