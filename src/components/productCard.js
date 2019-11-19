import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function ProductCard({ pTitle, pDescription }){
    return (
        <Card style={{ width: '18rem' }}>
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