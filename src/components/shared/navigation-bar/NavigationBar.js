import React, { useState, Icon } from 'react'
// scss
import './NavigationBar.scss'
// components
import MQ from '@utils/media-queries.js'
import PageNavigation from './PageNavigation.js'
import Toolbar from './Toolbar.js'
import SearchBar from './search-bar'

// assets
import logoImage from '@images/eugy_logo.png'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from '@store/features/drawerSlice.js'
import { toggleSearchbar } from '@store/features/searchbarSlice.js'

// context
import NavigationContext, { additionalContentMap } from '@contexts/navigation-context.js'

function NavigationBar (props) {
  // searchbar
  const dispatch = useDispatch()
  const isSearchbarOn = useSelector(({ searchbar }) => searchbar.isOpen)

  // additional content logic
  const [additionalContent, updateAdditionalContent] = useState(null)
  const injectAdditionalContent = (name) => {
    const chosen = additionalContentMap[name]
    updateAdditionalContent(
      current => !chosen || current === chosen ? current : chosen
    )
  }
  const removeAdditionalContent = () => updateAdditionalContent(null)
  const additionalContentApi = {
    injectAdditionalContent,
    removeAdditionalContent
  }

  const contentTablet = (
    <>
      <PageNavigation />
      <Toolbar />
    </>
  )
  const contentPhone = (
    <>
      <Icon classes="navigation-bar__icon"
        onClick={() => dispatch(openDrawer())}>menu</Icon>

      <img className="navigation-bar__eugy-logo"
        src={logoImage} alt="Eugy Logo" />

      <Toolbar />
    </>
  )

  return (
    <NavigationContext.Provider value={additionalContentApi}>
      <aside className="navigation-bar">
        <div className="navigation-bar__menu-container">
          <MQ.Tablet fallback={contentPhone}>
            {contentTablet}
          </MQ.Tablet>
        </div>

        <SearchBar />

        <div className="navigation-bar__additional-content">
          {additionalContent}
        </div>

        <div className={`navigation-bar__backdrop ${isSearchbarOn ? 'is-on': ''}`} 
          onClick={() => dispatch(toggleSearchbar())} />
      </aside>
    </NavigationContext.Provider>
  )
}

export default NavigationBar;