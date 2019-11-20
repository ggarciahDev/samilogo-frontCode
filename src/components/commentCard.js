import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function CommentCard({ cUser, cComment }){    
    return (
        <Card style={{ minWidth: '18rem',minheigth: "250px", maxwidth: '18rem',maxheigth: "250px"  }} >
            <Card.Body>
                <Card.Title> {cUser} </Card.Title>
                <Card.Text>
                    {cComment}
                </Card.Text>
                <Button variant="primary">GO BACK</Button>
            </Card.Body>
        </Card>
    ); 
}

export default CommentCard