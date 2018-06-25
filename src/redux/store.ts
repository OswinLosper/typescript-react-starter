import {
  createStore, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers: any[] = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  logger,
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = (window as any);

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
