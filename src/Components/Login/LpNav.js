
import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
import Nav from 'react-bootstrap/Nav';
//import { Component } from "react";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
//import { render } from "react-dom";
import Card from 'react-bootstrap/Card';
import './App.css';

class LpNav extends Component {
constructor() {
	super();
	this.state = {
	login: true,
	signup: false
	};
	this.hideComponent = this.hideComponent.bind(this);
}

hideComponent(varname) {
	console.log(varname);
	switch (varname) {
	case "login":
		this.setState({ login: true});
		this.setState({ signup: false });
		break;
	case "signup":
		this.setState({ signup: true });
		this.setState({ login: false });
		break;
	default: return;
	}
}

render() {
	const { login, signup} = this.state;
	return (
	<Card id="bfg">
	<Card.Header>
		<Nav variant="tabs">
		<Nav.Item>
		<Nav.Link onClick={() => this.hideComponent("login")}>
			Log In
		</Nav.Link>
		</Nav.Item>
		<Nav.Item>
		<Nav.Link onClick={() => this.hideComponent("signup")}>
			Sign Up
		</Nav.Link>
		</Nav.Item>
	  </Nav></Card.Header>
	  <Card.Body>
	<div>
		{login && <LoginForm />}
		
		{signup && <SignupForm />}
		
		
	</div></Card.Body>
	</Card>
	
	);
}
}

export default LpNav;
