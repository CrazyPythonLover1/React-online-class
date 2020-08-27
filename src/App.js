import React from 'react';
import logo from './Logo.png'
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Store from './components/Store/Store';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

    const handleAddCourse = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    }


  return (
    <div className="App">
      <Navbar logo={logo} handleAddCourse={handleAddCourse} cart={cart} > </Navbar>
      <Store handleAddCourse={handleAddCourse} cart={cart}></Store>
    </div>
  );
}

export default App;
