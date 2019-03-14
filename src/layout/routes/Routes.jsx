// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardContainer from '../../features/dashboard/containers/DashboardContainer';
import PopularMoviesContainer from '../../features/movies-list/containers/PopularMoviesContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={DashboardContainer} />
      <Route path="/popular" component={PopularMoviesContainer} />
    </Switch>
  );
};

export default Routes;