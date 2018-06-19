import React from 'react';

const Shop = () => (
  <div>
    <h2>Shop</h2>
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
            <button id="more-btn" className="more-btn">
              <span className="more-dot"></span>
              <span className="more-dot"></span>
              <span className="more-dot"></span>
            </button>
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
            <button id="more-btn" className="more-btn">
              <span className="more-dot"></span>
              <span className="more-dot"></span>
              <span className="more-dot"></span>
            </button>
          </div>
          <div className="col-md-12">
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

     <div className="block-1">
      <div className="row">
        <div className="col-md-4">
          <div> 
            <ul className="info-vente">
              <li><p className="vente">Gestions des stocks</p></li>
              <li className="stock">En stock</li>
              <li className="vendu">Volume total vendu</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <input type="text" placeholder="&#xF002;" className="search-shop" />
          </div>
        </div>
        <div className="col-md-4">
          <button id="more-btn" className="more-btn">
            <span className="more-dot"></span>
            <span className="more-dot"></span>
            <span className="more-dot"></span>
          </button>
        </div>
      </div>
     </div>
     
    

  </div>
);

export default Shop;


