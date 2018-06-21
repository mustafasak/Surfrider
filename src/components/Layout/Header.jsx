import React from 'react';
import PropTypes from 'prop-types';

import { userShape } from '../../config/shapes/user';

const Header = ({ user }) => (
  <header className="layout__header">
    <input type="text" placeholder="&#xF002;" className="search" />

    <h1 className="title">Social Surfrider</h1>

    <nav className="header__navbar">
      <button className="header__navbar-item" data-toggle="dropdown">
        <img
          className="icon icon-notif"
          src="/img/notification.png"
          alt="Notifications"
        />
      </button>
      <button className="header__navbar-item" data-toggle="dropdown">
        <img
          className="icon icon-setting"
          src="/img/settings.png"
          alt="Settings"
        />
      </button>
      <button
        className="header__navbar-item header__navbar-item--user"
        data-toggle="dropdown"
      >
        <img
          className="icon icon-user"
          src={user.avatar || '/img/user.png'}
          alt="User"
        />
        <span className="header__user-info">
          <span className="header__user-name">
            {user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.email}
          </span>
          {user.isAdmin && (
            <span className="header__user-title">Administrateur</span>
          )}
        </span>
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
};

export default Header;
