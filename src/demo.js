//import logo from './inqq.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


//import Navbar from 'react-bootstrap/Button';
//import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
function Demo() {
    function toggle{

}
    };
  return (
    <div id="qwer">
    <div id="bdy">
    <div className="App">
      <p id="abx">in<span id="ffr">Q</span>uest</p>
    </div>
    </div>
    <div id="tabl">
    <Table>
      <tr>
      <td id="halfo"></td>
        <td id="halfo1">
        <Card id="bfg">
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#poi">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#uyt">Sign Up</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
  <div id="poi">
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button onClick="" variant="primary" type="submit">
    Log In
  </Button>
</Form></div>
<div id="uyt">
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button onClick="" variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
</div>
  </Card.Body>
</Card>
        
        </td>
      </tr>
    </Table>
    </div>
    </div>
  );
}

export default Demo;
