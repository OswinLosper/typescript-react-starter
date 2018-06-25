import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store, { history } from '~/redux/store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'react-router-redux';
import Router from '~/core/router';

const { render } = ReactDOM;

const target = document.querySelector('#root') as HTMLElement;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  target,
);

registerServiceWorker();
