import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from './Store/middleWare/logger'
import reducer from './Store/Reducers/index'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer , combineReducers(thunk , logger , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(<Provider store = {store}><App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
