import React, { useState } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import './App.scss';

// child components
import NavigationBar from '@components/shared/navigation-bar'

// context
import RootContext from '@contexts/root-context.js'

import Home from '@components/pages/home/Home.js'

function App() {
  const [isDrawerOpen, updateIsDrawerOpen] = useState(false)

  const rootApi = {
    // drawer-related apis
    isDrawerOpen: () => isDrawerOpen,
    openDrawer: () => updateIsDrawerOpen(true),
    closeDrawer: () => updateIsDrawerOpen(false)

    // etc ...
  }

  return (
    <RootContext.Provider value={rootApi}>
      <div className="app">
        <NavigationBar />

        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </RootContext.Provider>
  );
}

export default App;
