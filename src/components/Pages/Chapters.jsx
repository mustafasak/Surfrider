import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchChapters from './SearchChapters';
import Chapter from './Chapter';

const Chapters = () => (
  <div>
    <Switch>
      <Route exact path="/antennes" component={SearchChapters} />
      <Route path="/antennes/:slug" component={Chapter} />
    </Switch>
  </div>
);

export default Chapters;
