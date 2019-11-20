import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/login';
import SignUp from './Components/signup';
import ListProducts from './Components/listProducts';
import Button from 'react-bootstrap/Button';
import auth from './Components/auth';

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

  test(){
    console.log(auth.user);
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

/*
          <ProtectedListProducts
            path="/products"
            component={ListProducts}
          />


<Route path="/" exact email="sf@mail.com" component={Login} />
<Route path="/signup" component={SignUp} />
<Route path="/products" component={listProducts} />

          <Route
            path='/products'
            render={(props) => <ListProducts {...props} isSignedIn={this.state.isSignedIn} />}
          />
*/