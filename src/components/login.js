import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import auth from './auth';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorText: '',
      email: props.email,
      password: ""
    }
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  logIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user._id) {
          auth.logIn();
          auth.setUser(user);
          this.props.history.push("/products")

          //this.props.loadUser(user)
        } else {

          auth.logOut();
          this.setState({
            errorText: "Usuario o contraseña incorrectos. Vuelve a intentarlo."
          })
          //console.log("Error", user.error)

        }
      })

    console.log(auth.isAuth());
  }

  render() {
    return (
      <div className="App">
        <segment className="BackColor">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="MedTitles">Email</Form.Label>
              <Form.Control onChange={this.setEmail} type="email" placeholder="Ingresa tu Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="MedTitles">Contraseña</Form.Label>
              <Form.Control onChange={this.setPassword} type="password" placeholder="Contraseña" />
              <Form.Text className="text-danger">
                {this.state.errorText}
              </Form.Text>
            </Form.Group>
          </Form>

          <Button onClick={this.logIn} variant="primary" type="submit">
            Ingresar
          </Button>

          <br />
          <Link className="Font-Link" to="/signup">
            ¿No tienes una cuenta? ¡Registrate aquí!
          </Link>


          <a className="Font-Link" href="https://youtu.be/gpLfZUdr-KM?t=11">
            Who R U?
          </a>

        </segment>
      </div>
    )
  }
}

export default Login
