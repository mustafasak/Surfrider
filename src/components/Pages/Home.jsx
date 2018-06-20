import React from 'react';

const Home = () => (
  <div>

    <div className="block-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 subtitle">
            <p>Prochain événements</p>
            <button className="mois">CE MOIS-CI<span className="arrow arrow-bottom"></span></button>
          </div>
          <div className="block-event">
            <div className="subtitle">
              <p><img alt="" src="/img/icon-yellow/event-yellow.svg" />Prochain événements</p>
            </div>
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
          </div>
        </div>
      </div>
    </div>

    <div className="block-1">
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
              <span><img alt="" src="/img/icon-yellow/don-yellow.svg" />4712 €</span>
            </div>
          </div>
          <div className="info">
            <p>Evénements organisés *</p>
            <div className="background-info">
              <span><img alt="" src="/img/icon-yellow/event-yellow.svg" />3</span>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="info">
            <p>Participations aux évenements *</p>
            <div className="background-info">
              <span><img alt="" src="/img/icon-yellow/adherent-yellow.svg" />512</span>
            </div>
          </div>
          <div className="info">
            <p>Nouveaux adhérents *</p>
            <div className="background-info">
              <span><img alt="" src="/img/icon-yellow/user-yellow.svg" />64</span>
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
    </div>

    <div className="block-2">
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 subtitle">
              <p>Classement des dons</p>
              <button id="more-btn" className="more-btn">
                <span className="more-dot"></span>
                <span className="more-dot"></span>
                <span className="more-dot"></span>
              </button>
            </div>
          </div>
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
    </div>

    <div className="block-3">
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 subtitle">
              <p>Classement des participations aux événements</p>
              <button id="more-btn" className="more-btn">
                <span className="more-dot"></span>
                <span className="more-dot"></span>
                <span className="more-dot"></span>
              </button>
            </div>
          </div>
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
    </div>

    <div className="block-2">
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 subtitle">
              <p>Classement du nombre d'événements organisés</p>
              <button id="more-btn" className="more-btn">
                <span className="more-dot"></span>
                <span className="more-dot"></span>
                <span className="more-dot"></span>
              </button>
            </div>
          </div>
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
    </div>

    <div className="block-3">
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 subtitle">
              <p>Classement des antennes/dons</p>
              <button id="more-btn" className="more-btn">
                <span className="more-dot"></span>
                <span className="more-dot"></span>
                <span className="more-dot"></span>
              </button>
            </div>
          </div>
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
    </div>

  </div>
);

export default Home;
