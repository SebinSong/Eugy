import React from 'react'
// scss
import './NavigationBar.scss'
// child components
import PageNavigation from './PageNavigation.js'

export default function NavigationBar (props) {
  return (
    <aside className="navigation-bar">
      <PageNavigation />
    </aside>
  )
}