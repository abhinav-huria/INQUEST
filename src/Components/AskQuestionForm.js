import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './Home.css';
import './Animation.css';
import Animation from './Animation';

class AskQuestionForm extends React.Component {
  state = { title: "", topic: "C/C++", description: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.props.history.push("/");
  };

  render() {
    return (<>
    
      <Container id="askcard" className="justify-content-center overlay">
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              required
              as="select"
              placeholder="Choose your option"
              value={this.state.topic}
              onChange={(e) => this.setState({ topic: e.target.value })}
            >
              <option disabled>Choose your option</option>
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
            <Form.Control
              required
              id="bbox"
              as="textarea"
              placeholder="Enter your question here"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </Form.Group>
<div id="alignbutton">
          <Button id="postq" type="submit">
            Post Your Question!
          </Button>
          </div>
        </Form>
      </Container>
      <Animation/>
     
      </>
    );
  }
}
export default withRouter(AskQuestionForm);
