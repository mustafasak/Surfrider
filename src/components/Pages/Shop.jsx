import React from 'react';

const Shop = () => (
  <div>
    <h2>Shop</h2>
    <div className="grid">
	    <article className="module desktop tablet-1">
        <div className="row">
          <div className="col-md-12 subtitle">
            <p>Nombre d'articles vendus</p>
            <img src="img/dot-option.png"/>
          </div>
          <div className="col-md-12">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12">
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
            <img src="img/dot-option.png"/>
          </div>
          <div className="col-md-12">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12">
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
            <img src="img/dot-option.png"/>
          </div>
          <div className="col-md-12">
            <img src="img/chart.png"/>
          </div>
          <div className="col-md-12">
            <ul className="info-chart">
              <li className="men">Homme</li>
              <li className="women">Femme</li>
              <li className="accessories">Accessoires</li>
            </ul>
          </div>
        </div>
      </article>
    </div>

     <div className="block-1">
      <div className="row">
        <div className="col-md-4">
          <div className="vente">
            <p>Répartition des ventes</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <input type="text" placeholder="&#xF002;" className="search-shop" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
          </div>
        </div>
      </div>
     </div>

     
  </div>
);

export default Shop;


