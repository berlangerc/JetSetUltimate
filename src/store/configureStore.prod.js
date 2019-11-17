import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';

import rootReducer from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(promise, thunk)
  ));
};