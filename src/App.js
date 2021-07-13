import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import './App.scss';

// child components
import NavigationBar from '@components/shared/navigation-bar'
import Drawer from '@components/shared/drawer-menu'
import ShoppingCart from '@components/shared/shopping-cart'

// redux
import { Provider } from 'react-redux'
import store from '@store/index.js'

import Home from '@components/pages/home/Home.js'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <NavigationBar />

        <Drawer />

        <ShoppingCart />

        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
