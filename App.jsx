import React from 'react';
import { useState } from 'react';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Recommended from './Recommended/Recommended.jsx'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      
      <div className="app__page">
        <Sidebar/>
        <Recommended/>
      </div>
      
    </div>
  )
}

export default App
