import React from 'react';

import EventsMap from '../Core/EventsMap';
import Block from '../Core/Block';

import events from '../../data/events.json';

const Home = () => (
  <div className="layout__grid">
    <div className="layout__grid-item layout__grid-item--10/10">
      <Block
        title="Prochain événements"
        noPadding
        action={
          <button className="mois">
            CE MOIS-CI<span className="arrow arrow-bottom" />
          </button>
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="block-event">
              <Block title="Prochain événements">
                <div className="date-event">
                  <ul>
                    <li>
                      <img alt="" src="/img/dechet-1.jpg" />
                      <span>12 juillet 2018 - Antenne Hendaye</span>
                      <p>Nettoyage de la plage chef de baie</p>
                    </li>
                    <li>
                      <img alt="" src="/img/dechet-2.jpg" />
                      <span>25 juillet 2018 - Antenne Bretagne</span>
                      <p>Nettoyage de la plage chef de baie</p>
                    </li>
                    <li>
                      <img alt="" src="/img/dechet-3.jpg" />
                      <span>26 août 2018 - Antenne Biarritz</span>
                      <p>Nettoyage de la plage chef de baie</p>
                    </li>
                  </ul>
                </div>
                <button>Plus d'évenements</button>
              </Block>
            </div>
          </div>
        </div>
        <div className="events__map">
          <EventsMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            defaultZoom={5}
            defaultCenter={{ lat: 46.2276, lng: 2.2137 }}
            events={events}
          />
        </div>
      </Block>
    </div>

    <div className="layout__grid-item layout__grid-item--10/10">
      <Block>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 info-mois">
              <img alt="" src="/img/mois.png" />
              <span>Antenne du mois</span>
              <p>CÔTE BASQUE</p>
            </div>
            <div className="col-md-5">
              <div className="info">
                <p>Dons récoltés *</p>
                <div className="background-info">
                  <span>
                    <img alt="" src="/img/icon-yellow/don-yellow.svg" />4712 €
                  </span>
                </div>
              </div>
              <div className="info">
                <p>Evénements organisés *</p>
                <div className="background-info">
                  <span>
                    <img alt="" src="/img/icon-yellow/event-yellow.svg" />3
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info">
                <p>Participations aux évenements *</p>
                <div className="background-info">
                  <span>
                    <img alt="" src="/img/icon-yellow/adherent-yellow.svg" />512
                  </span>
                </div>
              </div>
              <div className="info">
                <p>Nouveaux adhérents *</p>
                <div className="background-info">
                  <span>
                    <img alt="" src="/img/icon-yellow/user-yellow.svg" />64
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 block-stat">
              <button className="stats">LES STATS DE L'ANTENNE</button>
              <p>* Chiffres calculés sur le mois M-1</p>
            </div>
          </div>
        </div>
      </Block>
    </div>

    <div className="layout__grid-item layout__grid-item--5/10">
      <Block
        title="Classement des dons"
        action={
          <img
            className="Block__more"
            src="/img/Button__more.svg"
            alt="Tout voir"
          />
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 dons">
              <img alt="" src="/img/icon-yellow/don-yellow.svg" />
              <span>Antenne</span>
              <p>LANDES</p>
              <p className="nbr">5022 €</p>
            </div>
            <div className="col-md-9">
              <ul className="top-list">
                <li className="list-item">
                  <span>1</span>
                  <p>5022 €</p>
                  <p className="antennes">Antennes Landes</p>
                </li>
                <li className="list-item">
                  <span>2</span>
                  <p>4712 €</p>
                  <p className="antennes">Antennes côte Basque</p>
                </li>
                <li className="list-item">
                  <span>3</span>
                  <p>4560 €</p>
                  <p className="antennes">Antennes la Rochelle</p>
                </li>
                <li>
                  <button>CLASSEMENT COMPLET</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Block>
    </div>

    <div className="layout__grid-item layout__grid-item--5/10">
      <Block
        title="Classement des participations aux événements"
        action={
          <img
            className="Block__more"
            src="/img/Button__more.svg"
            alt="Tout voir"
          />
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 event">
              <img alt="" src="/img/icon-yellow/adherent-yellow.svg" />
              <span>Antenne</span>
              <p>CÔTE BASQUE</p>
              <p className="nbr">512</p>
            </div>
            <div className="col-md-9">
              <ul className="top-list">
                <li className="list-item">
                  <span>1</span>
                  <p>5022 €</p>
                  <p className="antennes">Antennes Landes</p>
                </li>
                <li className="list-item">
                  <span>2</span>
                  <p>4712 €</p>
                  <p className="antennes">Antennes côte Basque</p>
                </li>
                <li className="list-item">
                  <span>3</span>
                  <p>4560 €</p>
                  <p className="antennes">Antennes la Rochelle</p>
                </li>
                <li>
                  <button>CLASSEMENT COMPLET</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Block>
    </div>

    <div className="layout__grid-item layout__grid-item--5/10">
      <Block
        title="Classement du nombre d'événements organisés"
        action={
          <img
            className="Block__more"
            src="/img/Button__more.svg"
            alt="Tout voir"
          />
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 organisation">
              <img alt="" src="/img/icon-yellow/event-yellow.svg" />
              <span>Antenne</span>
              <p>CÔTE BASQUE</p>
              <p className="nbr">3 EVENEMENTS</p>
            </div>
            <div className="col-md-9">
              <ul className="top-list">
                <li className="list-item">
                  <span>1</span>
                  <p>5022 €</p>
                  <p className="antennes">Antennes Landes</p>
                </li>
                <li className="list-item">
                  <span>2</span>
                  <p>4712 €</p>
                  <p className="antennes">Antennes côte Basque</p>
                </li>
                <li className="list-item">
                  <span>3</span>
                  <p>4560 €</p>
                  <p className="antennes">Antennes la Rochelle</p>
                </li>
                <li>
                  <button>CLASSEMENT COMPLET</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Block>
    </div>

    <div className="layout__grid-item layout__grid-item--5/10">
      <Block
        title="Classement des antennes/dons"
        action={
          <img
            className="Block__more"
            src="/img/Button__more.svg"
            alt="Tout voir"
          />
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 antennes">
              <img alt="" src="/img/icon-yellow/user-yellow.svg" />
              <span>Antenne</span>
              <p>CÔTE BASQUE</p>
              <p className="nbr">64</p>
            </div>
            <div className="col-md-9">
              <ul className="top-list">
                <li className="list-item">
                  <span>1</span>
                  <p>5022 €</p>
                  <p className="antennes">Antennes Landes</p>
                </li>
                <li className="list-item">
                  <span>2</span>
                  <p>4712 €</p>
                  <p className="antennes">Antennes côte Basque</p>
                </li>
                <li className="list-item">
                  <span>3</span>
                  <p>4560 €</p>
                  <p className="antennes">Antennes la Rochelle</p>
                </li>
                <li>
                  <button>CLASSEMENT COMPLET</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Block>
    </div>
  </div>
);

export default Home;
