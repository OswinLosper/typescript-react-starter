import * as React from 'react';
const { Fragment } = React;
import { Route /* , Link */ } from 'react-router-dom';
import HomePage from '~/components/pages/home/component';

const Router = () => (
  <Fragment>
    <Route exact path="/" component={HomePage} />
  </Fragment>
);

export default Router;
