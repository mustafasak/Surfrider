import {
  combineReducers
} from 'redux';

import UserReducers from './UserReducers';

const rootReducer = combineReducers({
  user: UserReducers,
});

export default rootReducer;