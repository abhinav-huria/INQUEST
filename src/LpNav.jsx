import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';


class LpNav extends React.Component{
    render(){
        return(
           <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#poi">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#uyt">Sign Up</Nav.Link>
      </Nav.Item>
    </Nav>
        );
    }
}
export default LpNav;