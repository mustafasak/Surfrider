import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
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
              <img className="icon" src="/img/menu/antennes/unselected.svg" />Antennes
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
        <a href="#">Se déconnecter</a>
      </div>
    </section>
  </aside>
);

export default Sidebar;
