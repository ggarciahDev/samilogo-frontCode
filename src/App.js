import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/signup';
import listProducts from './components/listProducts';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products" component={listProducts} />
    </Router>
  );
}

export default App;
