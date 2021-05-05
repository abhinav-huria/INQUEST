import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css'; 



class Btn extends React.Component{
    render(){
        return(
            <ButtonGroup aria-label="Basic example" id="btn" >
            <Button variant="dark">Recent Questions</Button>
            <Button variant="dark">Most Responses</Button>
            <Button variant="dark">Recently Answered</Button>
            <Button variant="dark">Unanswered</Button>
            </ButtonGroup>
           
        ); 
    }
}

export default Btn;