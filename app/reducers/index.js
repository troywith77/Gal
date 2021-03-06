// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import tabs from './tabs'

const rootReducer = combineReducers({
  tabs, 
  router
});

export default rootReducer;
