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
  componentDidMount() {
    this.props.verifyUser();
  }

  render() {
    const { verifyLoading } = this.props;

    if (verifyLoading) {
      return <Loader />;
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      verifyUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
