import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import * as counterActions from '../actions/counter';
import type { counterStateType } from '../reducers/counter';
import { electronEnhancer } from 'redux-electron-store'
import electron from 'electron'
import { hashHistory } from 'react-router';

// const history = createHashHistory();

const configureStore = (initialState, scope = 'renderer') => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  // middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(hashHistory);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...counterActions,
    ...routerActions,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);
  // const enhancer = composeEnhancers(...enhancers, electronEnhancer({
  //   dispatchProxy: a => store.dispatch(a),
  //   filter: true
  // }));

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);
  if(typeof window !== 'undefined') {
    window.store = store
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    });
  }

  return store;
};

function isRenderer () {
  // running in a web browser
  if (typeof process === 'undefined') return true

  // node-integration is disabled
  if (!process) return true

  // We're in node.js somehow
  if (!process.type) return false

  return process.type === 'renderer'
}

export default { configureStore };
