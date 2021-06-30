import React, { Component } from 'react'
// scss
import './NavigationBar.scss'
// child components
import PageNavigation from './PageNavigation.js'
import Toolbar from './Toolbar.js'

class NavigationBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      additionalContent: null
    }
  }
}

export default function NavigationBar (props) {
  return (
    <aside className="navigation-bar">
      <div className="navigation-bar__menu-container">
        <PageNavigation />
        <Toolbar />
      </div>
      <div className="navigation-bar__additional-content">
        {additionalContent}
      </div>
    </aside>
  )
}