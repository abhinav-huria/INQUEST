import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import inquest from "./images/inquestblacknew.png";
import { BsSearch} from 'react-icons/bs';
import "./NavBar.css";
import { Link, withRouter} from "react-router-dom";
class NavBar extends React.Component {
  state = { term: "" };
  onTopicSelected = (eventKey, event) => {
    this.props.history.push({
      pathname: "/topics",
      search: `t=${eventKey}`,
    });
  };
  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: `q=${this.state.term}`,
    });
  };

  render() {
    return (
      <>
          <Navbar expand="lg" className="nav2" fixed="top">
          <Navbar.Brand id="style">
            <Link id="style" to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link >
                <Link id="style" to="/askquestion">Ask a Question</Link>
              </Nav.Link>
              <NavDropdown
                title="Topics"
                id="basic-nav-dropdown"
                onSelect={this.onTopicSelected}
              >
                <NavDropdown.Item eventKey="Java">Java</NavDropdown.Item>

                <NavDropdown.Item eventKey="Javascript">
                  Javascript
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="C/CPP">C/CPP</NavDropdown.Item>
                <NavDropdown.Item eventKey="React">React</NavDropdown.Item>
                <NavDropdown.Item eventKey="Python">Python</NavDropdown.Item>
                <NavDropdown.Item eventKey="SQL">SQL</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Nav>
            <img src={inquest} alt="logo" id="logo"/>
            </Nav>
            <Form id="rtdiv" className="d-flex" onSubmit={this.onSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <Button variant="outline-warning" type="submit">
               <BsSearch className="search"/>
              </Button>
            </Form>
          </Navbar.Collapse>
          
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
