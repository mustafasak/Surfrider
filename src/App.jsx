import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Content from './components/Layout/Content';

const App = () => (
  <Router>
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  </Router>
);

export default App;
