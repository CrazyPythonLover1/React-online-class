import React from 'react';
import logo from './Logo.png'
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Store from './components/Store/Store';

function App() {

  return (
    <div className="App">
      <Navbar logo={logo}> </Navbar>
      <Store></Store>
    </div>
  );
}

export default App;
