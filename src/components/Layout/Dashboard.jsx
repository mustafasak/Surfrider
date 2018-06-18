import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

class Dashboard extends PureComponent {
  render() {
    const { authenticated } = this.props;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="layout__container">
        <Sidebar />
        <div className="layout__main">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
