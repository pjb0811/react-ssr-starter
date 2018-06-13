import { combineReducers } from 'redux';

import post from './post';
import counter from './counter';

export default combineReducers({
  post,
  counter
});
