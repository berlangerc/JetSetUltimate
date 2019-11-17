import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from './reducers';


export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, composeWithDevTools(
        applyMiddleware(promise, thunk)
        // other store enhancers if any
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}