import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import auth from './auth';
import RandImg from '../images/randImg'

function ProductCard({ pTitle, pDescription, pID }) {
    return (
        <Card style={{ minWidth: '18rem', minheigth: "250px", maxwidth: '18rem', maxheigth: "250px" }} >
            <RandImg/>
            <Card.Body>
                <Card.Title> {pTitle} </Card.Title>
                <Card.Text>
                    {pDescription}
                </Card.Text>

                <Link className="Font-Link" to={"/comments/"+pID}>
                    <Button onClick={ () => { auth.setCurrentProductID(pID) } } variant="primary">Comments</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ProductCard

