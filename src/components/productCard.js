import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function ProductCard({ pTitle, pDescription }){
    /*
  return (
        <section>
          <img variant="top" src="http://pictures.dealer.com/h/hoehnaudiaoa/1974/39364e173c4a45b2fee2724ec7310f30x.jpg" alt='image1' width="300px" height ="150px"/>
          <section width = "300px">
          <p align = "center" >{pTitle}</p><h5> Precio : 300</h5>
          </section>
          <section width = "300px">
          <h6 align = "center">{pDescription}</h6>
          </section>
        </section>
    );*/
    
    return (
        <Card style={{ minWidth: '18rem',minheigth: "250px", maxwidth: '18rem',maxheigth: "250px"  }} >
            <Card.Img variant="top" src="http://pictures.dealer.com/h/hoehnaudiaoa/1974/39364e173c4a45b2fee2724ec7310f30x.jpg"/>
            <Card.Body>
                <Card.Title> {pTitle} </Card.Title>
                <Card.Text>
                    {pDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ); 
}

export default ProductCard