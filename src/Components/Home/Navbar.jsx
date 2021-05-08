import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './Home.css';
import inquest from '../images/inquest.png';
import search from '../images/search.png';

class Navv extends React.Component {
    render() {
       return (
          <>
        <Navbar  className="nav" >
        <img src={inquest} alt="logo" class="logo" ></img>
    </Navbar>
     
 <Navbar  expand="lg" className="nav2">
 <Navbar.Brand href="#">Home</Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="mr-auto">
     <Nav.Link href="#">Ask a question</Nav.Link>
     <Nav.Link href="#">My Questions</Nav.Link>
     <NavDropdown title="Topics" id="basic-nav-dropdown">
       <NavDropdown.Item href="#m">Action</NavDropdown.Item>
       <NavDropdown.Item href="#m">Another action</NavDropdown.Item>
       <NavDropdown.Item href="#m">Something</NavDropdown.Item>
     </NavDropdown>
   </Nav>
   <Form inline >
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-primary"><img src={search} alt="Search" class="search"></img></Button>
   </Form>
 </Navbar.Collapse>
</Navbar>
</>
       );
    }
 }


 export default Navv;
