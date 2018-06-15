import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import {
  composeWithDevTools
} from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, multi)
  )
);

export default store;