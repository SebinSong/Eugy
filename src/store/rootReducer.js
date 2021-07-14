import { combineReducers } from 'redux';

// slice reducers
import { drawerSlice } from './features/drawerSlice';
import { searchbarSlice } from './features/searchbarSlice';
import { cartSlice } from './features/cartSlice';

const rootReducer = combineReducers({
  drawer: drawerSlice,
  searchbar: searchbarSlice,
  cart: cartSlice
});

export default rootReducer;