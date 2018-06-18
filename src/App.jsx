import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

import Dashboard from './components/Layout/Dashboard';
import Login from './components/Pages/Login';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
