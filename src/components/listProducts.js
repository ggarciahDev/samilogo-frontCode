import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './productCard';
import Button from 'react-bootstrap/Button';
import Function from './function';

class ListProducts extends Component {
  getProducts(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        console.log(product);

        return (
          <div>
            <ProductCard pTitle={product.title}/>
          </div>
        )
      });
    });
  }

    render () {
      return (
        <div className="App">
            <segment className="BackColor">

                <h1>Productos Online!! ^-^</h1>
                <br/>
                
                <Button onClick={()=>this.getProducts()} variant="primary" type="submit">
                  Pruebas
                </Button>
                <Function  />
                <br/>


                <ProductCard pTitle={"Titulo de prueba #1"}/>
                <br/>
                <ProductCard pTitle={"Titulo de prueba #2"}/>

            </segment>
        </div>
      )
    }
  }
   
  export default ListProducts