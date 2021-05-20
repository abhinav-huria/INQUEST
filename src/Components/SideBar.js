import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiQuestionAnswerFill} from "react-icons/ri";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    let questions = this.props.data.questions;
    this.state = {
      popularQuestions: questions.sort((question1, question2) => {
        return question2.answerIds.length - question1.answerIds.length;
      }),
    };
  }

  onQuestionClicked = (event) => {
    const questionClicked = event.target.attributes[0].value;
    this.props.history.push({
      pathname: "/answerpage",
      state: {
        question: this.state.popularQuestions[questionClicked],
      },
    });
  };
  render() {
    return (
      <>
     
        <Card id="stat">
          <Card.Header id="sbheader">Stats</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroupItem>
              <AiFillQuestionCircle id="iconsize"/>&nbsp;
              Questions: {this.props.data.questions.length} 
                
              </ListGroupItem>
              <ListGroupItem>
              <RiQuestionAnswerFill id="iconsize"/>&nbsp;
              Answers: {this.props.data.answers.length} 
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card id="qcard">
          <Card.Header id="sbheader">Popular Questions</Card.Header>
          <Card.Body>
            <ListGroup >
              <div className="qcardhover">
              <ListGroupItem value={0} onClick={this.onQuestionClicked}>
                {this.state.popularQuestions[0].title}
              </ListGroupItem>
              </div>
              <div className="qcardhover">
              <ListGroupItem value={1} onClick={this.onQuestionClicked}>
                {this.state.popularQuestions[1].title}
              </ListGroupItem>
              </div>
              <div className="qcardhover">
              <ListGroupItem value={2} onClick={this.onQuestionClicked}>
                {this.state.popularQuestions[2].title}
              </ListGroupItem>
             </div>
            </ListGroup>
          </Card.Body>
        </Card>
        
      </>
    );
  }
}

export default withRouter(SideBar);
