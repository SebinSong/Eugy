import {
  Switch,
  Route
} from 'react-router-dom'

import './App.scss';

// child components
import NavigationBar from '@components/shared/navigation-bar/NavigationBar.js'

import Home from '@components/pages/home/Home.js'

function App() {
  return (
    <div className="app">
      <NavigationBar />

      
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
