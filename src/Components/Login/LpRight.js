//import logo from './inqq.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import LpHead from './LpHead';
import LpNav from './LpNav';
import LpTable from './LpTable';
import Lpnavnew from './Lpnavnew';

//import Navbar from 'react-bootstrap/Button';
//import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
class LpRight extends React.Component{
  render() {
   
  return (
     <div id="qwer">
     <Lpnavnew />
   
    <LpTable/>
      
    
    </div>
  );
}
}
export default LpRight;
