import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <input type="text" placeholder="&#xF002;" className="search" />
        <h1 className="title">Surfrider fondation europe</h1>
        <nav className="navbar nav-bar-static-top">
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-notif">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img className="icon-notif" src="/img/notification.png" />
                </a>
              </li>
              <li className="dropdown settings">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img className="icon-setting" src="/img/settings.png" />
                </a>
              </li>
              <li className="dropdown user-img">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img className="icon-user" src="/img/user.png" />
                </a>
              </li>
              <li className="dropdown user-name">
                <p>James Page</p>
                <span>Administrateur</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
