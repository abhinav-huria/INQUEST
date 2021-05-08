import React from "react";
import AddAnswer from "./AddAnswer";
import AskQuestionForm from "./AskQuestionForm";
import Ask from "./Ask";
import ShowQuestions from "./ShowQuestions";
class App extends React.Component {
  state = {
    data: [
      {
        title: "Is an array name a pointer?",
        topic: "C/C++",
        desription: "aaab",
        answer: [],
      },
    ],
  };
  addQuestion = (newQues) => {
    console.log(newQues);
    this.setState((prevState) => ({ data: [...prevState.data, newQues] }));
  };
  AddAnswer = (ans) => {
    this.setState();
  };
  render() {
    return (
      <>
        <Ask onSubmit={this.addQuestion} />
        <ShowQuestions questions={this.state.data} />
        {/* <AddAnswer onSubmit={this.AddAnswer} /> */}
      </>
    );
  }
}

export default App;
