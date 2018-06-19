import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

<<<<<<< HEAD
import { userShape } from '../../config/shapes/user';
import SubSidebar from './SubSidebar';

class Dashboard extends PureComponent {
  render() {
    const { authenticated, user, location } = this.props;
=======
class Dashboard extends PureComponent {
  render() {
    const { authenticated } = this.props;
>>>>>>> origin/improve/loginPage

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

<<<<<<< HEAD
    const isDashboardHome = location.pathname === '/';
    const isDashboardChapter = location.pathname === '/antennes';

    return (
      <div
        className={`layout__container ${
          isDashboardHome ? '' : 'layout__container--small'
        } ${isDashboardChapter ? 'layout__container--sub-sidebar' : ''}`}
      >
        <Sidebar />
        <SubSidebar />
        <div className="layout__main">
          <Header user={user} />
=======
    return (
      <div className="layout__container">
        <Sidebar />
        <div className="layout__main">
          <Header />
>>>>>>> origin/improve/loginPage
          <Content />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
<<<<<<< HEAD
  user: PropTypes.shape(userShape).isRequired,
  authenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
=======
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
>>>>>>> origin/improve/loginPage
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
