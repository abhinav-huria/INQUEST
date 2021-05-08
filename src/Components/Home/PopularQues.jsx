import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';

class Popq extends React.Component{
    render(){ 
        return(
            <Card id="qcard">
            <Card.Header>Popular Questions</Card.Header>
             <Card.Body>
                 <ListGroup>
                     <ListGroupItem> Question 1 </ListGroupItem>
                     <ListGroupItem> Question 1 </ListGroupItem>
                     <ListGroupItem> Question 1 </ListGroupItem>
                 </ListGroup>
             </Card.Body>
            </Card>
);
    }
}

export default Popq;
