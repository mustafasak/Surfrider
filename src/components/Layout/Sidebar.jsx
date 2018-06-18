import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../actions/UserActions';

class Sidebar extends PureComponent {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return (
      <aside className="layout__sidebar">
        <section className="sidebar">
          <div>
            <a href="#">
              <img src="/img/logo.png" className="logo" alt="logo" />
            </a>
          </div>
          <nav className="nav-sidebar">
            <ul>
              <li>
                <Link to="/">
                  <img
                    className="icon"
                    src="/img/menu/social/unselected.svg"
                    alt="Social Surfrider icon"
                  />
                  <span>Social Surfrider</span>
                </Link>
              </li>
              <li>
                <Link to="shop">
                  <img
                    className="icon"
                    src="/img/menu/shop/unselected.svg"
                    alt="Social Surfrider icon"
                  />
                  <span>Shop</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon"
                    src="/img/menu/antennes/unselected.svg"
                  />Antennes
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src="/img/menu/site/unselected.svg" />Surfrider.eu
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src="/img/menu/outils/unselected.svg" />Outils
                  Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon"
                    src="/img/menu/utilisateurs/unselected.svg"
                  />Gestion des utilisateurs
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src="/img/menu/dons/unselected.svg" />Dons
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src="/img/menu/event/unselected.svg" />Evenements
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src="/img/menu/actu/unselected.svg" />Actus
                </a>
              </li>
            </ul>
          </nav>
          <div className="connect">
            <button onClick={this.handleLogout}>Se déconnecter</button>
          </div>
        </section>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutUser,
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
