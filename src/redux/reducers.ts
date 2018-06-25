import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sharedReducer from './shared/shared.reducer';

export default combineReducers({
  routing: routerReducer,
  sharedReducer,
});
