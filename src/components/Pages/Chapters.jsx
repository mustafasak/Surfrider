import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchChapters from './Chapter/SearchChapters';
import Chapter from './Chapter/Chapter';
import CreateChapter from './Chapter/CreateChapter';

const Chapters = () => (
  <div>
    <Switch>
      <Route exact path="/antennes" component={SearchChapters} />
      <Route path="/antennes/creation" component={CreateChapter} />
      <Route path="/antennes/:slug" component={Chapter} />
    </Switch>
  </div>
);

export default Chapters;
