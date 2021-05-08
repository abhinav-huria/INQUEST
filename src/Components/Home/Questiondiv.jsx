import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import './Home.css';
//import Abtn from './buttongroup';

class Containerdiv extends React.Component{

    change(){
        return(
            <h3>Hello</h3>
                );
    }
    render(){
        return(
       <Container>
       {this.change()}
    </Container>
        );
    }

    }
 export default Containerdiv;
