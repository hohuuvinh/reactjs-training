import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  appReducers,
  applyMiddleware(thunk)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
