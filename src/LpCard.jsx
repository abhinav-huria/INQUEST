import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LpNav from './LpNav';

class LpCard extends React.Component{
    render(){
        return(
            <Card id="bfg">
  <Card.Header>
   <LpNav />
  </Card.Header>
  <Card.Body>
  <div id="poi">
  <LoginForm />
  </div>
<div id="uyt">
<SignupForm />
</div>
  </Card.Body>
</Card>
        );
    }
}
export default LpCard;