import React from 'react';

const Home = () => (
  <div>
    <h2>Social Surfrider</h2>
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
          <img alt="" src="/img/icon-white/don-white.svg" />
          <span>4712 € </span>
          <p>de dons *</p>
        </div>
        <div className="info">
          <img alt="" src="/img/icon-white/event-white.svg" />
          <span>3 </span>
          <p>événements organisés *</p>
        </div>
      </div>
      <div className="col-md-5">
        <div className="info">
          <img alt="" src="/img/icon-white/adherent-white.svg" />
          <span>512 </span>
          <p>participations *</p>
        </div>
        <div className="info">
          <img alt="" src="/img/icon-white/user-white.svg" />
          <span>64 </span>
          <p>nouveaux adhérents *</p>
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
              <img src="img/dot-option.png"/>
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
              <img src="img/dot-option.png"/>
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
              <img src="img/dot-option.png"/>
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
              <img src="img/dot-option.png"/>
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
