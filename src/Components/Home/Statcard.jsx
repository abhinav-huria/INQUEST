import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';

class Statc extends React.Component{
    render(){ 
        return(
            <Card id="stat">
            <Card.Header >Stats</Card.Header>
             <Card.Body>
                <ListGroup>
                    <ListGroupItem>
                        Questions
                        </ListGroupItem>
                    <ListGroupItem>Answers</ListGroupItem>
                    <ListGroupItem>Users</ListGroupItem>
                </ListGroup>
             </Card.Body>
            </Card>
);
    }
}

export default Statc;
