// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import tabs from './tabs'
import nav from './nav'

const rootReducer = combineReducers({
  tabs, 
  nav,
  router
});

export default rootReducer;
