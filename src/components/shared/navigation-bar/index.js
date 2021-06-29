import React from 'react'
// scss
import './NavigationBar.scss'
// child components
import PageNavigation from './PageNavigation.js'
import Toolbar from './Toolbar.js'

export default function NavigationBar (props) {
  return (
    <aside className="navigation-bar">
      <PageNavigation />
      <Toolbar />
    </aside>
  )
}