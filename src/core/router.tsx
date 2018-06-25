import * as React from 'react';
import { Route /* , Link */ } from 'react-router-dom';
import HomePage from '~/components/pages/home/';

const Router = () => (
  <div>
    <Route exact path="/" component={HomePage} />
  </div>
);

export default Router;
