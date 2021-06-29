import React from 'react'
import Types from 'prop-types'

// Registering components globally to React object

const Icon = ({
  name = '',
  isBold,
  classes = '',
  children
}) => {
  let classCombined = [
    'mi',
    isBold && 'mib',
    'icon',
    classes
  ].filter(Boolean).join(' ')

  return (
    <span className={classCombined}>
      {children || name}
    </span>
  )
}

Icon.propTypes = {
  name: Types.string,
  classes: Types.string,
  isBold: Types.bool
}

React.Icon = Icon
