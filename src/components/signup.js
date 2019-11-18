import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
      return (
        <div className="App">
            <segment className="BackColor">
                <h1>Datos de registro</h1>
                <br/>
                <Form>
                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="text" placeholder="Nombre completo" />
                  </Form.Group>

                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="number" placeholder="Edad" />
                  </Form.Group>

                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="text" placeholder="Ciudad" />
                  </Form.Group>

                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="text" placeholder="Dirección" />
                  </Form.Group>

                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formCompleteName">
                  <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  
                  <Link className="Font-Link" to="/products">
                    <Button variant="primary" type="submit">
                      Registrarse
                    </Button>
                  </Link>
                </Form>
            </segment>
        </div>
      )
    }
  }
   
  export default Login