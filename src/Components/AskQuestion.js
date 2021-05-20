import React from "react";
// import Container from 'react-bootstrap/Container';
import AskQuestionForm from "./AskQuestionForm";
import './Home.css';
const AskQuestion = ({ onSubmit }) => {
  return (<div id="alignform">
  <AskQuestionForm onSubmit={onSubmit} />
  </div>);
 
 
};
export default AskQuestion;
