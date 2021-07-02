import React, { useState } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import './App.scss';

// child components
import NavigationBar from '@components/shared/navigation-bar'
import Drawer from '@components/shared/drawer-menu'

// context
import RootContext from '@contexts/root-context.js'

import Home from '@components/pages/home/Home.js'

function App() {
  const [isDrawerOpen, updateIsDrawerOpen] = useState(false)

  const rootApi = {
    // 1. drawer-related apis 
    //    makes sure the drawer open/close can be triggered anywhere in the app.
    isDrawerOpen: () => isDrawerOpen,
    openDrawer: () => updateIsDrawerOpen(true),
    closeDrawer: () => updateIsDrawerOpen(false)

    // etc ...
  }

  return (
    <RootContext.Provider value={rootApi}>
      <div className="app">
        <NavigationBar />

        <Drawer />

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
