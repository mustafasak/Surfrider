import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Antennes from '../Pages/Antennes';
import Surfrider from '../Pages/Surfrider';
import Outils from '../Pages/Outils';
import Gestion from '../Pages/Gestion';
import Dons from '../Pages/Dons';
import Event from '../Pages/Event';
import Actus from '../Pages/Actus';

const Content = () => (
  <div className="layout__main-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/antennes" component={Antennes} />
      <Route path="/surfrider" component={Surfrider} />
      <Route path="/outils" component={Outils} />
      <Route path="/gestion" component={Gestion} />
      <Route path="/dons" component={Dons} />
      <Route path="/event" component={Event} />
      <Route path="/actus" component={Actus} />
    </Switch>
  </div>
);

export default Content;
