import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shop = () => (
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
        <ul className="buttons-more">
          <li>
          <button id="more-btn" className="more-btn">
            <span className="more-dot"></span>
            <span className="more-dot"></span>
            <span className="more-dot"></span>
          </button>
          </li>
          <li>
          <div className="dropdown">
            <button>Trier par<span className="arrow arrow-bottom"></span></button>
			    </div>
          </li>
          <li>
          <div className="dropdown">
            <button>Filtres<span className="arrow arrow-bottom"></span></button>
			    </div>
          </li>
        </ul>
      </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <Tabs>
          <TabList>
            <Tab><img src="/img/shop/homme/inactif.svg"/>Homme</Tab>
            <Tab><img src="/img/shop/femme/inactif.svg"/>Femme</Tab>
            <Tab><img src="/img/shop/accessoires/inactif.svg"/>accessoires</Tab>
            <Tab><img src="/img/shop/star/inactif.svg"/>Top produits achetés</Tab>
            <Tab><img src="/img/shop/vus/inactif.svg"/>Top produits consultés</Tab>
          </TabList>

          <TabPanel>
          <table className="table table-hover">
            <thead>
              <tr className="bloc-info">
                <th></th>
                <th>Référence</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>Volume total des ventes</th>
                <th>Valeur total des ventes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>600</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>600</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>600</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>600</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>600</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
            </tbody>
          </table>
          </TabPanel>

          <TabPanel>
          <table className="table table-hover">
            <thead>
              <tr className="bloc-info">
                <th></th>
                <th>Référence</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>Volume total des ventes</th>
                <th>Valeur total des ventes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>3000</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>232</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>3000</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>232</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>3000</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>232</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>3000</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>232</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>3000</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>232</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
            </tbody>
          </table>
          </TabPanel>

          <TabPanel>
          <table className="table table-hover">
            <thead>
              <tr className="bloc-info">
                <th></th>
                <th>Référence</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>Volume total des ventes</th>
                <th>Valeur total des ventes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2090</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>150</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2090</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>150</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2090</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>150</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2090</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>150</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2090</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>150</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
            </tbody>
          </table>
          </TabPanel>

          <TabPanel>
          <table className="table table-hover">
            <thead>
              <tr className="bloc-info">
                <th></th>
                <th>Référence</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>Volume total des ventes</th>
                <th>Valeur total des ventes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>1495</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>500</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>1495</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>500</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>1495</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>500</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>1495</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>500</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>1495</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>500</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
            </tbody>
          </table>
          </TabPanel>

          <TabPanel>
          <table className="table table-hover">
            <thead>
              <tr className="bloc-info">
                <th></th>
                <th>Référence</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>Volume total des ventes</th>
                <th>Valeur total des ventes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2030</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>300</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2030</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>300</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>4050</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>300</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2030</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>300</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
              <tr>
                <td><img src="/img/tee.jpg"/></td>
                <td>2030</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td><span>23</span> - 92</td>
                <td>300</td>
                <td>5940,00 €</td>
                <td><button className="stats-tab">LES STATISTIQUES</button></td>
              </tr>
            </tbody>
          </table>
          </TabPanel>

        </Tabs>
        </div>
        <nav class="pagination-sm">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">5</a>
            </li>
          </ul>
			  </nav>
      </div>
     </div>

  </div>
);

export default Shop;


