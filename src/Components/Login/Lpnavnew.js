import React from 'react';
//import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';
import inquest from './inquest.png';
//import search from'./search.png';

class Lpnavnew extends React.Component {
    render() {
       return (
          <>
        <Navbar  className="nav">
        <img src={inquest} alt="logo" class="logo" ></img>
        
    </Navbar>
     
 
</>
       );
    }
 }


 export default Lpnavnew;