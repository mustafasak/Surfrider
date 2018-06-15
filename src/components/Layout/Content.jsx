import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Login from '../Pages/Login';

const Content = () => (
  <div className="content-wrapper">
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />

    <Route exact path="/login" component={Login} />
  </div>
);

export default Content;
