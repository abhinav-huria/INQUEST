import React from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Ask extends React.Component {
  state = { title: "", topic: "", description: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control required
              type="text"
              placeholder="Enter title"
            value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Topic</Form.Label>
            <Form.Control required
              as="select"
              placeholder="Choose your option"
              value={this.state.topic}
             onChange={(e) => this.setState({ topic: e.target.value })}
            >
              <option selected disabled>Choose your option</option>
              <option>C/C++</option>
              <option>Java</option>
              <option>Python</option>
              <option>Javascript</option>
              <option>SQL</option>
              <option>Go</option>
              <option>React</option>
              <option>PHP</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control required
              id="bbox"
              type="text"
              placeholder="Enter your question here"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Post Your Question!
          </Button>
        </Form>
      </Container>
    );
  }
}
export default Ask;
