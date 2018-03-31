import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';

import rootReducer from './src/reducers';

import App from './src/components/App';

const initialState = Immutable.Map();

const store = createStore(
  rootReducer,
  initialState
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//PS: You need to create and export this "container component" in src to work ok?