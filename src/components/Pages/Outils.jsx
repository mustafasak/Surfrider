import React from 'react';

const Outils = () => (
  <div>
    <h2>Outils marketing</h2>
    <div className="grid">
	    <article className="module desktop tablet-1">
        <div className="row">
          <div className="col-md-12 subtitle">
          <p>Réseaux sociaux</p>
          <img src="img/dot-option.png"/>
          </div>
        </div>
      </article>
	    <article className="module desktop tablet-2">
        <div className="row">
          <div className="col-md-12 subtitle">
          <p>Newsletters</p>
          <img src="img/dot-option.png"/>
          </div>
        </div>
      </article>
	    <article className="module desktop tablet-1">
        <div className="row">
          <div className="col-md-12 subtitle">
          <p>Affiche/flyers</p>
          <img src="img/dot-option.png"/>
        </div>
        </div>
      </article>
    </div>
  </div>
);


export default Outils;
