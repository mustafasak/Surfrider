import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';

const Content = () => (
  <div className="content-wrapper">
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </div>
);

export default Content;
