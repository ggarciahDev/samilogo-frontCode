import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import SignUp from './components/signup';
import ListProducts from './components/listProducts';
import Button from 'react-bootstrap/Button';
import auth from './components/auth';
import ListComments from './components/listComments'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {
        id: '',
        name: "",
        age: 0,
        city: "",
        address: "",
        email: "",
        password: ""
      }
    }
  }

  test() {
    console.log(auth.currentProductID);
  }

  render() {
    return (
      <div>
        <Router>

          <Route
            path='/'
            exact
            render={(props) => <Login {...props} />}
          />

          <Route
            path='/signup'
            render={(props) => <SignUp {...props} />}
          />

          <Route
            path='/products'
            render={(props) => <ListProducts {...props} />}
          />

          <Route
            path='/comments/:id'
            render={(props) => <ListComments {...props} />}
          />
        </Router>

        <div className="GlobalButton">
          <Button onClick={() => this.test()} variant="primary" type="submit">
            Do Global Test
          </Button>
        </div>

      </div>
    );
  }
}

export default App;
