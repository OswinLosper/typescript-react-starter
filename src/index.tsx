import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store, { history } from '~/redux/store';

import App from './core/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'react-router-redux';

const { render } = ReactDOM;

const target = document.querySelector('#root') as HTMLElement;


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target,
);

registerServiceWorker();
