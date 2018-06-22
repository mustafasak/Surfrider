import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dons = () => (
  <div>
    <div className="grid">
	    <article className="module desktop tablet-1">
        <div className="row">
          <div className="col-md-12 subtitle">
            <p>Nombre d'articles vendus</p>
            <button id="more-btn" className="more-btn">
              <span className="more-dot"></span>
              <span className="more-dot"></span>
              <span className="more-dot"></span>
            </button>
          </div>
          <div className="col-md-12 chart">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12 list-info">
            <ul className="info-chart">
              <li className="men">Homme</li>
              <li className="women">Femme</li>
              <li className="accessories">Accessoires</li>
            </ul>
          </div>
        </div>
      </article>

	    <article className="module desktop tablet-2">
        <div className="row">
          <div className="col-md-12 subtitle">
            <p>Valeurs totale des ventes (CA)</p>
            <button id="more-btn" className="more-btn">
              <span className="more-dot"></span>
              <span className="more-dot"></span>
              <span className="more-dot"></span>
            </button>
          </div>
          <div className="col-md-12 chart">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12 list-info">
            <ul className="info-chart">
              <li className="men">Homme</li>
              <li className="women">Femme</li>
              <li className="accessories">Accessoires</li>
            </ul>
          </div>
        </div>
      </article>

	    <article className="module desktop tablet-1">
        <div className="row">
          <div className="col-md-12 subtitle">
            <p>Répartition des ventes</p>
            <button id="more-btn" className="more-btn">
              <span className="more-dot"></span>
              <span className="more-dot"></span>
              <span className="more-dot"></span>
            </button>
          </div>
          <div className="col-md-12 chart">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12 list-info">
            <ul className="info-chart">
              <li className="men">Homme</li>
              <li className="women">Femme</li>
              <li className="accessories">Accessoires</li>
            </ul>
          </div>
        </div>
      </article>
    </div>

    <div className="block-1 none">
    
    <div className="row" style={{ padding: `30px` }}>
        <div className="col-md-4">
          <div> 
            <ul className="info-vente">
              <li><p className="vente">Nombre d'articles vendus</p></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <input type="text" placeholder="&#xF002;" className="search-shop" />
          </div>
        </div>
        <div className="col-md-4">
        <ul className="buttons-more">
          <li>
            <div className="background-don">
              <p>Montants récoltées en 2018<span>1235 €</span></p>
            </div></li>
          <li>
          <button id="more-btn" className="more-btn">
            <span className="more-dot"></span>
            <span className="more-dot"></span>
            <span className="more-dot"></span>
          </button>
          </li>
        </ul>
      </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="td-dons">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>E-mail</th>
                <th>Don donnée via</th>
                <th>Dons donnée via</th>
                <th>Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Don ponctuel</td>
                <td>Site de l'antenne</td>
                <td>15 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     </div>

  </div>
);

export default Dons;
