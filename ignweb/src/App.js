import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.js';
import BottomBar from './components/BottomBar.js';
import MainPage from './components/MainPage.js';

import './styles/apps.css';


function App() {

  return (
    <div>
      <Navbar/>
      <BottomBar/>
      <MainPage/>
      
    </div>
  );
}

export default App;
