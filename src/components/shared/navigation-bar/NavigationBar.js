import React, { Component } from 'react'
// scss
import './NavigationBar.scss'
// child components
import PageNavigation from './PageNavigation.js'
import Toolbar from './Toolbar.js'

// context
import NavigationContext, { additionalContentMap } from './NavigationContext'

class NavigationBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      additionalContent: null
    }

    this.additionalContentApi = {
      injectAdditionalContent: this.injectAdditionalContent,
      removeAdditionalContent: this.removeAdditionalContent
    }
  }

  injectAdditionalContent = (name) => {
    const chosen = additionalContentMap[name]
    if (!chosen ||
      this.state.additionalContent === chosen)
      return;

    this.setState({
      additionalContent: chosen
    })
  }

  removeAdditionalContent = () => {
    this.setState({
      additionalContent: null
    })
  }

  render () {
    const {
      additionalContent
    } = this.state

    return (
      <NavigationContext.Provider value={this.additionalContentApi}>
        <aside className="navigation-bar">
          <div className="navigation-bar__menu-container">
            <PageNavigation />
            <Toolbar />
          </div>
          <div className="navigation-bar__additional-content">
            {additionalContent}
          </div>
        </aside>
      </NavigationContext.Provider>
    )
  }
};

export default NavigationBar;