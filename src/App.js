import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Dropdown from './components/Dropdown';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Content/>
      </div>
    );
  }
}

export default App;