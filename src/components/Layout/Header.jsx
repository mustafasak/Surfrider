import React from 'react';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <input type="text" placeholder="&#xF002;" className="search" />
        <h1 className="title">Surfrider fondation europe</h1>
        <nav className="nav-bar nav-bar-static-top">
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="messages-notif">
                <a href="#" data-toggle="dropdown">
                  <img className="icon-notif" src="/img/notification.png" />
                </a>
              </li>
              <li className="settings">
                <a href="#" data-toggle="dropdown">
                  <img className="icon-setting" src="/img/settings.png" />
                </a>
              </li>
              <li className="user-img">
                <a href="#" data-toggle="dropdown">
                  <img className="icon-user" src="/img/user.png" />
                </a>
              </li>
              <li className="user-name">
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
