//import logo from './inqq.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import LpHead from './LpHead';
import LpCard from './LpCard';

//import Navbar from 'react-bootstrap/Button';
//import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
function LpRight() {
   
  return (
    <div id="qwer">
    <LpHead />
    <div id="tabl">
    <Table>
      <tr>
      <td id="halfo"></td>
        <td id="halfo1">
        <LpCard />
        
        </td>
      </tr>
    </Table>
    </div>
    </div>
  );
}

export default LpRight;
