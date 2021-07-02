import React, { 
  Component,
  Icon
} from 'react'
// scss
import './NavigationBar.scss'
// components
import MQ from '@utils/media-queries.js'
import PageNavigation from './PageNavigation.js'
import Toolbar from './Toolbar.js'

// assets
import logoImage from '@images/eugy_logo.png'

// context
import NavigationContext, { additionalContentMap } from '@contexts/navigation-context.js'

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

    const contentTablet = (
      <>
        <PageNavigation />
        <Toolbar />
      </>
    )
    const contentPhone = (
      <>
        <Icon classes="navigation-bar__icon">menu</Icon>

        <img className="navigation-bar__eugy-logo"
          src={logoImage} alt="Eugy Logo" />

        <Toolbar />
      </>
    )


    return (
      <NavigationContext.Provider value={this.additionalContentApi}>
        <aside className="navigation-bar">
          <div className="navigation-bar__menu-container">
            <MQ.Tablet fallback={contentPhone}>
              {contentTablet}
            </MQ.Tablet>
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