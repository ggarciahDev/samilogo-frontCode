import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buscador from './components/Search';
import Card from './components/Cards/cards'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buscador />
        <Card />
      </header>
    </div>
  );
}

export default App;
