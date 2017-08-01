// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { electronEnhancer } from 'redux-electron-store'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  electronEnhancer({
    dispatchProxy: a => store.dispatch(a),
    filter: true
  })
);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore()

export default store;
