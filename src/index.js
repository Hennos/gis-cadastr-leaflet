import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { Provider } from 'react-redux';

import Reducers from './reducers/index.js';
import rootSaga from './sagas/index.js'

import App from './components/App';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
