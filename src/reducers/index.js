import {
  combineReducers
} from 'redux';

import UserReducers from './UserReducers';
import ChapterReducers from './ChapterReducers';

const rootReducer = combineReducers({
  user: UserReducers,
  chapter: ChapterReducers,
});

export default rootReducer;