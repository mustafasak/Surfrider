import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

import { userShape } from '../../config/shapes/user';

class Dashboard extends PureComponent {
  render() {
    const { authenticated, user, location } = this.props;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    const isDashboardHome = location.pathname === '/';

    return (
      <div
        className={`layout__container ${isDashboardHome ||
          'layout__container--small'}`}
      >
        <Sidebar />
        <div className="layout__main">
          <Header user={user} />
          <Content />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  authenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
