import React from 'react'
import Types from 'prop-types'

// Registering components globally to React object

const Icon = ({
  name = '',
  isBold,
  classes = '',
  children,
  onClick = null
}) => {
  let classCombined = [
    'mi',
    isBold && 'mib',
    'icon',
    classes
  ].filter(Boolean).join(' ')

  return (
    <button className={classCombined}
      onClick={onClick}>
      {children || name}
    </button>
  )
}

Icon.propTypes = {
  name: Types.string,
  classes: Types.string,
  isBold: Types.bool
}

React.Icon = Icon
