import React, { Icon } from 'react'
import { NavLink } from 'react-router-dom'
import Types from 'prop-types'

import logoImage from '@images/eugy_logo.png'

// context
import NavigationContext from './NavigationContext'

// TODO: move it to somewhere where router settings are sitting
const listData = [
  {to: '/how-to-make', name: 'How to Make', id: 'howtomake'},
  {to: '/our-story', name: 'Our stroy', id: 'ourstory', hasArrow: true},
  {to: '/giving back', name: 'Giving Back', id: 'givingback'},
  {to: '/contact', name: 'Contact', id: 'contact'},
  {to: '/retail-login', name: 'Retail Login', id: 'retaillogin'}
]

const TextNav = ({ 
  to = '', name,
  hasArrow = false, classes = '',
  onClick = null, onHover = null
}) => {
  const content = [
    <span key="text" className="text">{name}</span>,
    hasArrow && <Icon key="icon">expand_more</Icon>
  ].filter(Boolean)

  return (
    <li className={classes}>
      {
        to ?
        <NavLink className="text-link" to={to}>{content}</NavLink> :
        <span className="text-link"
          onClick={onClick}
          onMouseEnter={onHover}>{content}</span>
      }
    </li>
  )
}

TextNav.propTypes = {
  to: Types.string,
  name: Types.string,
  classes: Types.string,
  hasArrow: Types.bool
}

function PageNavigation (props) {
  return (
    <ul className="navigation-bar__page-nav">
      <li className="navigation-bar__logo">
        <NavLink to="/">
          <img className="navigation-bar__eugy-logo"
            src={logoImage} alt="Eugy Logo" />
        </NavLink>
      </li>

      <NavigationContext.Consumer>
        {
          ({ injectAdditionalContent }) => (
            <TextNav classes="navigation-bar__shop-btn"
              name="Shop"
              hasArrow={true}
              onHover={() => injectAdditionalContent('shop-menu')}
              onClick={() => injectAdditionalContent('shop-menu')} />
          )
        }
      </NavigationContext.Consumer>

      { listData.map(
          (item) => <TextNav

            key={item.id}
            { ...item } />
        ) }
    </ul>
  )
}

export default PageNavigation