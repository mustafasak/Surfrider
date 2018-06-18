import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

import Dashboard from './components/Layout/Dashboard';
import Login from './components/Pages/Login';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
