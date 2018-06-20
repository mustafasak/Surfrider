import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from './components/Core/Loader';
import Dashboard from './components/Layout/Dashboard';
import Login from './components/Pages/Login';

import { verifyUser } from './actions/UserActions';

class App extends PureComponent {
  constructor() {
    super();

    this.state = { showLoader: true };
  }

  componentDidMount() {
    this.props.verifyUser();
  }

  render() {
    const { verifyLoading } = this.props;
    const { showLoader } = this.state;

    if (showLoader) {
      return (
        <Loader
          loading={verifyLoading}
          onFinish={() => this.setState({ showLoader: false })}
        />
      );
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  verifyLoading: PropTypes.bool.isRequired,
  verifyUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  verifyLoading: state.user.verifyLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      verifyUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
