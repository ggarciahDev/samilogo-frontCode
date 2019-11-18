import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  

    render () {
      return (
        <div className="App">
            <segment className="BackColor">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  
                  <Link className="Font-Link" to="/products">
                    <Button variant="primary" type="submit">
                      Ingresar
                    </Button>
                  </Link>
                </Form>
                
                <br/>
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