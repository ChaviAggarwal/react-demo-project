import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createGlobalReducer from './reducers';
import globalSagas from './sagas/global-sagas';
const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createGlobalReducer(),
  composeEnhancers(
  applyMiddleware(...middlewares))
);

sagaMiddleware.run(globalSagas);

export default store;
