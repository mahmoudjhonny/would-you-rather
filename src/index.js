import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './Store/Reducers/CompineReducers'
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension"
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk , logger)))

ReactDOM.render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
