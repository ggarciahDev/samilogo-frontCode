import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import auth from './auth';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: 0,
      city: "",
      address: "",
      email: "",
      password: ""
    }
    this.setName = this.setName.bind(this);
    this.setEdad = this.setEdad.bind(this);
    this.setCiudad = this.setCiudad.bind(this);
    this.setDireccion = this.setDireccion.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setEdad(e) {
    this.setState({
      age: e.target.value
    })
  }

  setCiudad(e) {
    this.setState({
      city: e.target.value
    })
  }

  setDireccion(e) {
    this.setState({
      address: e.target.value
    })
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  sendUserData() {
    fetch("http://35.174.199.129:5000/api/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        city: this.state.city,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))

    auth.logIn();
    this.props.history.push("/products")
  }

  test() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <segment className="BackColor">
          <h1>Datos de registro</h1>
          <br />
          <Form>
            <Form.Group controlId="formCompleteName">
              <Form.Control onChange={this.setName} type="text" placeholder="Nombre completo" />
            </Form.Group>

            <Form.Group controlId="formEdad">
              <Form.Control onChange={this.setEdad} type="number" placeholder="Edad" />
            </Form.Group>

            <Form.Group controlId="formCiudad">
              <Form.Control onChange={this.setCiudad} type="text" placeholder="Ciudad" />
            </Form.Group>

            <Form.Group controlId="formDireccion">
              <Form.Control onChange={this.setDireccion} type="text" placeholder="Dirección" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control onChange={this.setEmail} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control onChange={this.setPassword} type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>
          <br />
          <Button onClick={this.sendUserData} variant="primary" type="submit">
            Registrarse
          </Button>

          <Link className="Font-Link" to="/products">
            <Button onClick={() => this.sendUserData()} variant="primary" type="submit">
              Registrarse
                </Button>
          </Link>

          <br />
          <Button onClick={() => this.test()} variant="primary" type="submit">
            Do Test
            </Button>
        </segment>
      </div>
    )
  }
}

export default SignUp