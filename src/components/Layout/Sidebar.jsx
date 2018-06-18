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
                alt="shop icon"
              />
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link to="antennes">
              <img
                className="icon"
                src="/img/menu/antennes/unselected.svg"
                alt="Antennes icon"
              />
              <span>Antennes</span>
            </Link>
          </li>
          <li>
            <Link to="surfrider">
              <img
                className="icon"
                src="/img/menu/site/unselected.svg"
                alt="Surfrider.eu icon"
              />
              <span>Surfrider.eu</span>
            </Link>
          </li>
          <li>
            <Link to="outils">
              <img
                className="icon"
                src="/img/menu/outils/unselected.svg"
                alt="outils-marketing icon"
              />
              <span>Outils Marketing</span>
            </Link>
          </li>
          <li>
          <Link to="gestion">
              <img
                className="icon"
                src="/img/menu/utilisateurs/unselected.svg"
                alt="gestion-des-utilisateurs icon"
              />
              <span>Gestion des utilisateurs</span>
            </Link>
          </li>
          <li>
            <Link to="dons">
              <img
                className="icon"
                src="/img/menu/dons/unselected.svg"
                alt="dons icon"
              />
              <span>Dons</span>
            </Link>
          </li>
          <li>
            <Link to="event">
              <img
                className="icon"
                src="/img/menu/event/unselected.svg"
                alt="Evenements icon"
              />
              <span>Evenements</span>
            </Link>
          </li>
          <li>
            <Link to="actus">
              <img
                className="icon"
                src="/img/menu/actu/unselected.svg"
                alt="Evenements icon"
              />
              <span>Actus</span>
            </Link>
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
