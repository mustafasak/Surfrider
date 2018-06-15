import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Login from '../Pages/Login';

const Content = () => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />

      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);

export default Content;
