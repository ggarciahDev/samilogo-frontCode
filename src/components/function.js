import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ProductCard from './productCard';

function Function(){
    let listP = new Array();
    listP.push("camino 01");
    listP.push("camino 02");
    listP.push("camino 03");

    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        //console.log(product);
        listP.push( String(product.title) );
        //console.log(listP.toString());  
      });
    });

    console.log(listP.toString());

    return (
        <div>
            <h4>Hola desde function</h4>
            {listP.map((title,index) => {
                return <ProductCard pTitle={title}/>
            })}
        </div>
    );
}

export default Function

//<ProductCard pTitle={product.title}/>