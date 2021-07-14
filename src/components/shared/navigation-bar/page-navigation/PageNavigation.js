import React, { 
  Icon
} from 'react'
import { NavLink } from 'react-router-dom'
import Types from 'prop-types'

import OurStoryItem from './OurStoryItem.js'
import ShopItem from './ShopItem.js'

import logoImage from '@images/eugy_logo.png'

import './PageNavigation.scss'

// TODO: move it to somewhere where router settings are sitting
const menuData = {
  'shop': { hovable: true, component: <ShopItem key="shop" />, 'id': 'shop' },
  'howToMake': { to: '/how-to-make', name: 'How to Make', id: 'how-to-make' },
  'outStory': { hovable: true, component: <OurStoryItem key="our-story" />, 'id': 'our-story' },
  'givingBack': { to: '/giving back', name: 'Giving Back', id: 'giving-back' },
  'contact': { to: '/contact', name: 'Contact', id: 'contact' },
  'retailLogin': { to: '/retail-login', name: 'Retail Login', id: 'retail-login' }
}

const TextNav = ({ 
  to = '', name,
  hasArrow = false, classes = null,
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
  const listItems = Object.values(menuData).map((item) => {
    if (item.hovable)
      return item.component
    else
      return <TextNav 
        key={item.id}
        { ...item } />
  })

  return (
    <ul className="navigation-bar__page-nav">
      <li className="navigation-bar__logo">
        <NavLink to="/">
          <img className="navigation-bar__eugy-logo"
            src={logoImage} alt="Eugy Logo" />
        </NavLink>
      </li>

      { listItems }
    </ul>
  )
}

export default PageNavigation