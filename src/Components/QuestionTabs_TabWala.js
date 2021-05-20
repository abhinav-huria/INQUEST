import React from "react";
import {  Tabs, Tab } from "react-bootstrap";
import "./Home.css";
import Question from "./Question";

class QuestionTabs extends React.Component {
    state = {
        sortedQuestions: this.props.data.questions.sort((question1, question2) => {
            return (
                new Date(question2.date.split("-")) -
                new Date(question1.date.split("-"))
            );
        }),
        key: "recentQuestion",
    };
    onTabChanged = (eventKey, event) => {
        this.setState({
            key: eventKey,
        }, this.sortQuestions);

    }
    sortQuestions = (key) => {
        if (this.state.key === "recentQuestion") {
            this.setState({
                sortedQuestions: this.props.data.questions.sort(
                    (question1, question2) => {
                        return (
                            new Date(question2.date.split("-")) -
                            new Date(question1.date.split("-"))
                        );
                    }
                ),
            });
        }
        else if (this.state.key === "mostResponses") {
            this.setState({
                sortedQuestions: this.props.data.questions.sort(
                    (question1, question2) => {
                        return question2.answerIds.length - question1.answerIds.length;
                    }
                ),
            });
        }
        else {
            this.setState({
                sortedQuestions: this.props.data.questions.filter((question) => {
                    if (question.answerIds.length === 0) return question;
                }),
            });
        }
    }
    render() {
        return (
            <>
                <div id="cont">
                   
                    <Tabs id="btn"  defaultActiveKey="recentQuestion" onSelect={this.onTabChanged}>

                        <Tab id="bcolor" eventKey="recentQuestion" variant="dark" title="Recent Questions" selected>

                            {this.state.sortedQuestions.map((question) => (
                                <Question question={question} key={question.id} />
                            ))}

                        </Tab>
                        <Tab id="bcolor" eventKey="mostResponses" variant="dark" title="Most Responses" id="bcolor">
                            {this.state.sortedQuestions.map((question) => (
                                <Question question={question} key={question.id} />
                            ))}
                        </Tab>
                        <Tab id="bcolor" eventKey="unAnswered" title="Unanswered" id="bcolor">
                            {this.state.sortedQuestions.map((question) => (
                                <Question question={question} key={question.id} />
                            ))}
                        </Tab>
                    </Tabs>
                  
                </div>
            </>
        );
    }
}

export default QuestionTabs;
