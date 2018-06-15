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
import Login from '../Pages/Login';

const Content = () => (
  <div className="content-wrapper">
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/antennes" component={Antennes} />
    <Route exact path="/surfrider" component={Surfrider} />
    <Route exact path="/outils" component={Outils} />
    <Route exact path="/gestion" component={Gestion} />
    <Route exact path="/dons" component={Dons} />
    <Route exact path="/event" component={Event} />
    <Route exact path="/actus" component={Actus} />

    <Route exact path="/login" component={Login} />
  </div>
);

export default Content;
