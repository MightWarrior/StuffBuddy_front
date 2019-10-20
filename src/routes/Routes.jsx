import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landing/Landing';
import Login from './login';
import Registration from './registration';
import Menu from './menu';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route component={Menu} exact path="/menu" />
        <Route component={Landing} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Registration} exact path="/register" />
      </Switch>
    );
  }
}

export default Router;
