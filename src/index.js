import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App';
import configureStore from './store/configureStore'

let store = configureStore();

ReactDOM.render((
  < Provider store={store} >
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </Provider >
), document.getElementById('root'));
