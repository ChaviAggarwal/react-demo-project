import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './state-management/store';
// import * as serviceWorker from './serviceWorker';
import './index.css';
import Routes from './routes';


render(
  <Provider store={store}>
    <Routes></Routes>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
