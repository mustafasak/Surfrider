import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import { logoutUser } from '../../actions/UserActions';
import { chapterShape } from '../../config/shapes/chapter';
import { userShape } from '../../config/shapes/user';

import '../../assets/css/Layout/Sidebar.css';

class Sidebar extends PureComponent {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    const { chapters, user } = this.props;

    return (
      <aside className="layout__sidebar">
        <section className="Sidebar">
          <div className="Sidebar__logo-container">
            <img
              src="/img/logo.png"
              className="Sidebar__logo"
              alt="Surfrider logo"
            />
          </div>
          <nav className="Sidebar__navigation">
            <NavLink
              to="/"
              exact
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--social" />
              <span>Social Surfrider</span>
            </NavLink>
            <NavLink
              to="/shop"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--shop" />
              <span>Shop</span>
            </NavLink>
            {chapters.length > 0 || user.isAdmin ? (
              <NavLink
                to="/antennes"
                className="Sidbar__navigation-item"
                activeClassName="Sidbar__navigation-item--active"
              >
                <span className="Sidebar__icon Sidebar__icon--antennes" />
                <span>Antennes</span>
              </NavLink>
            ) : null}
            <NavLink
              to="/surfrider"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--site" />
              <span>Surfrider.eu</span>
            </NavLink>
            <NavLink
              to="/outils"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--outils" />
              <span>Outils Marketing</span>
            </NavLink>
            <NavLink
              to="/gestion"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--utilisateurs" />
              <span>Gestion des utilisateurs</span>
            </NavLink>
            <NavLink
              to="/dons"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--dons" />
              <span>Dons</span>
            </NavLink>
            <NavLink
              to="/evenements"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--event" />
              <span>Evenements</span>
            </NavLink>
            <NavLink
              to="/actus"
              className="Sidbar__navigation-item"
              activeClassName="Sidbar__navigation-item--active"
            >
              <span className="Sidebar__icon Sidebar__icon--actu" />
              <span>Actus</span>
            </NavLink>
          </nav>
          <div className="Sidebar__logout">
            <button onClick={this.handleLogout}>Se déconnecter</button>
          </div>
        </section>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  chapters: state.chapter.chapters,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(Sidebar);
