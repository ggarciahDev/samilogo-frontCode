import React, { Component } from 'react';
import TableProducts from './tableProducts';
import Button from 'react-bootstrap/Button';
import auth from './auth';
import { Link } from 'react-router-dom';

class ListProducts extends Component {
  constructor(args) {
    super(args)

    this.state = {
      listP: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(products => this.setState({ listP: products }))
  }

  logOut() {
    auth.logOut();
  }

  render() {
    var title = [];
    var description = [];
    var id = [];
    this.state.listP.map((product, index) => {
      title[index] = product.title;
      description[index] = product.description;
      id[index] = product._id;
    });
    return (
      <div className="App">
        <segment className="BackColor">
          <br />
          <br />
          <h1>Productos Online!! ^-^</h1>
          <br />
          <Link className="Font-Link" to={"/"}>
            <Button onClick={this.logOut} className="bg-danger">Cerrar sesión</Button>
          </Link>
          <br />


          <TableProducts titleP={title} descriptionP={description} _id={id} />
        </segment>
      </div>
    )
  }
}


export default ListProducts

