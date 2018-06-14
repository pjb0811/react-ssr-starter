import { combineReducers } from 'redux';

import post from './post';
import counter from './counter';
import common from './common';

export default combineReducers({
  post,
  counter,
  common
});
