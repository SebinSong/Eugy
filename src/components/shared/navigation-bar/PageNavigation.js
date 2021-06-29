import React from 'react'
import { NavLink } from 'react-router-dom'

import logoImage from '@images/eugy_logo.png'

// TODO: move it to somewhere where router settings are sitting
const listData = [
  {to: '/how-to-make', name: 'How to Make', id: 'howtomake'},
  {to: '/our-story', name: 'Our stroy', id: 'ourstory'},
  {to: '/giving back', name: 'Giving Back', id: 'givingback'},
  {to: '/contact', name: 'Contact', id: 'contact'},
  {to: '/retail-login', name: 'Retail Login', id: 'retaillogin'}
]

const TextNav = ({ to, name }) => (
  <li>
    <NavLink className="text-link"
      to={to}
      >{name}</NavLink>
  </li>
)

function PageNavigation (props) {
  return (
    <ul className="navigation-bar__page-nav">
      <li className="navigation-bar__logo">
        <NavLink to="/">
          <img className="navigation-bar__eugy-logo"
            src={logoImage} alt="Eugy Logo" />
        </NavLink>
      </li>

      {listData.map(({
        to, name, id
      }) => <TextNav key={id} to={to} name={name} />)}
    </ul>
  )
}

export default PageNavigation