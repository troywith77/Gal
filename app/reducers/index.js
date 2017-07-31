// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key);
});

const rootReducer = combineReducers(Object.assign(modules, router));

export default rootReducer;
