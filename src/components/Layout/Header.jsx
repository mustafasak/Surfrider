import React from 'react';

const Header = () => (
  <header className="layout__header">
    <input type="text" placeholder="&#xF002;" className="search" />

    <h1 className="title">Surfrider fondation europe</h1>

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
        <img className="icon icon-user" src="/img/user.png" alt="User" />
        <span className="header__user-info">
          <span className="header__user-name">James Page</span>
          <span className="header__user-title">Administrateur</span>
        </span>
      </button>
    </nav>
  </header>
);

export default Header;
