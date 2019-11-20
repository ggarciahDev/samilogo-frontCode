import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function ProductCard({ pTitle, pDescription }){    
    return (
        <Card style={{ minWidth: '18rem',minheigth: "250px", maxwidth: '18rem',maxheigth: "250px"  }} >
            <Card.Img variant="top" src="http://pictures.dealer.com/h/hoehnaudiaoa/1974/39364e173c4a45b2fee2724ec7310f30x.jpg"/>
            <Card.Body>
                <Card.Title> {pTitle} </Card.Title>
                <Card.Text>
                    {pDescription}
                </Card.Text>
                <Button variant="primary">Comments</Button>
            </Card.Body>
        </Card>
    ); 
}

export default ProductCard