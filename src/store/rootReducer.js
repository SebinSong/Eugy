import { combineReducers } from 'redux';

// slice reducers
import { drawerSlice } from './features/drawerSlice';
import { searchbarSlice } from './features/searchbarSlice';

const rootReducer = combineReducers({
  drawer: drawerSlice,
  searchbar: searchbarSlice
});

export default rootReducer;