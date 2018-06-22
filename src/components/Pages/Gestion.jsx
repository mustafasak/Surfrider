import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Gestion = () => (
  <div>

    <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 btn__left">
        <ul>
          <li><button className="btn-user">CREER UN NOUVEL UTILISATEUR</button></li>
          <li><button className="btn-user">IMPORTER UNE LISTE</button></li>
          <li><button className="btn-user">TELECHARGER UNE LISTE</button></li>
        </ul>
      </div>
      <div className="col-md-4 sh__right">
        <ul>
          <li>
            <div className="dropdown">
            <button>Trier par<span className="arrow arrow-bottom"></span></button>
			      </div>
          </li>
          <li>
            <input type="text" placeholder="&#xF002;" className="search-user" />
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="block-1 none">
      <div className="row">
        <div className="col-md-12">
          <table className="td-user">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>E-mail</th>
                <th>Antenne rattachée</th>
                <th>Ville</th>
                <th>Rôle</th>
                <th>Droits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
              <tr>
                <td>Benjamin</td>
                <td>Martinez</td>
                <td>Benjamin.martinez@surfrider.eu</td>
                <td>Biarritz</td>
                <td>Hendaye</td>
                <td>Administrateur</td>
                <td>Complet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     </div>

  </div>
);

export default Gestion;
