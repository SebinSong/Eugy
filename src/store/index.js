import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer.js';

// each slice-reducer will have its own default state
const store = createStore(rootReducer, composeWithDevTools());

export default store;