import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Settings, Sections, Community, Institutional , Contact } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={Home}
        exact
        layout={Main}
        path="/home"
      />
      <RouteWithLayout
        component={Sections}
        exact
        layout={Main}
        path="/sections"
      />
      <RouteWithLayout
        component={Community}
        exact
        layout={Main}
        path="/community"
      />
      <RouteWithLayout
        component={Institutional}
        exact
        layout={Main}
        path="/institutional"
      />
      <RouteWithLayout
        component={Contact}
        exact
        layout={Main}
        path="/contact"
      />
      <RouteWithLayout
        component={Settings}
        exact
        layout={Main}
        path="/settings"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
