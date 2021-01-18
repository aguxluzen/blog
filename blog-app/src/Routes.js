import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';
import { Home as HomeView, Settings as SettingsView,
  Sections as SectionsView, Community as CommunityView,
  Institutional as InstitutionalView, Contact as ContactView } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={SectionsView}
        exact
        layout={MainLayout}
        path="/sections"
      />
      <RouteWithLayout
        component={CommunityView}
        exact
        layout={MainLayout}
        path="/community"
      />
      <RouteWithLayout
        component={InstitutionalView}
        exact
        layout={MainLayout}
        path="/institutional"
      />
      <RouteWithLayout
        component={ContactView}
        exact
        layout={MainLayout}
        path="/contact"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
