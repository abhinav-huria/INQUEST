
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LpRight from './LpRight';
import React from 'react';
import LpNav from './LpNav';
import Ask from './Ask';
import ShowQuestions from "./ShowQuestions";
class App extends React.Component {
  constructor(){
    super();
    
  }
  state = {
    data: [
      { 
        title: "Is an array name a pointer?",
        topic: "C/C++",
        description: "aaab",
        date: new Date().toJSON().slice(0,10),
        //date: new Date().getDate() + '-' + (new Date().getMonth() +1) + '-' + new Date().getFullYear() ,
        answer: [],
      },
    ],
  };
  addQuestion = ({title,topic,description}) => {
   
    //console.log(newQues);
    this.setState((prevState) => ({ data: [...prevState.data, {title,topic,description, date: new Date().toJSON().slice(0,10)}] }));
    console.log(this.state.data);
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
