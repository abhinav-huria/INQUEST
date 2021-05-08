import React from "react";
const ShowQuestions = (props) => {
  const questions = props.questions.map(({title,topic,description,date}, index) => {
    return (
      <li key={index}>
        Title:{title}
        <br />
        Topic:{topic}
        <br />
          Description:{description}
        <br />
        Date:{date}
      </li>
    );
  });
  return <ul>{questions}</ul>;
};
export default ShowQuestions;
