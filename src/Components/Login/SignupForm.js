//import { ReactComponent } from '*.svg';
//import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// import reportWebVitals from './reportWebVitals';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";

class SignupForm extends Component {
constructor() {
	super();
	this.state = {
	name: "React"
	};
}
    render(){
return(
    
<Form>
<Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Re-Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to the Terms & Conditions" />
  </Form.Group>
  <Button onClick="" variant="primary" type="submit">
    Log In
  </Button>
</Form>

);
}}
export default SignupForm;