import * as React from 'react';
import { Route /* , Link */ } from 'react-router-dom';
import HomePage from '~/components/pages/home/';
import AdminPage from '~/components/pages/admin/';

const Router = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/admin" component={AdminPage} />
  </div>
);

export default Router;
