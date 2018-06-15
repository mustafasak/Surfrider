import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Content from './components/Layout/Content';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    </Router>
  </Provider>
);

export default App;
