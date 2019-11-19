import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import img1 from '../images/carro1.jpg';

function ProductCard({ pTitle }){
    var product = {
        nombre: 'Nombre del producto',
        Descripcion: 'Descripcion del producto',
        imagen : './images/carro1.jpg',
        getNombre: function() {
          return this.nombre;
        },
        getDescripcion: function() {
            return this.Descripcion;
        },
        getImagen: function() {
            return this.imagen;
        }
    };
    return (
        <section>
          <img src={img1} alt='image1' width="300px" height ="150px"/>
          <section width = "300px">
          <h6 align = "center" >{pTitle}</h6><p> Precio : 300</p>
          </section>
          <section width = "300px">
          <p align = "center">Descripcion del producto</p>
          </section>
        </section>
    )
    /*return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title> {pTitle} </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );  
    */
}

export default ProductCard