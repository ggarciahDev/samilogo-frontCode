import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/login';
import Signup from './Components/signup';
import listProducts from './Components/listProducts';

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
