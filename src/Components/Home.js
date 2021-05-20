import React from "react";
import QuestionTabs from "./QuestionTabs";
import SideBar from './SideBar';
import './Home.css';


const Home = ({ data, addAnswer }) => {
  return (
    <>
    <div id="homebg">
    <div className="grid-container">
                <div  className="galign" >
      <SideBar data={data} />
      </div>
      </div>
      <QuestionTabs addAnswer={addAnswer} data={data} />
      </div>
    </>
  );
};
export default Home;
