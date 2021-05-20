import React from "react";
import QuestionTabs from "./QuestionTabs";
import SideBar from './SideBar';
// import Positioned from './Position';
// import Footer from './Footer';
import './Home.css';


const Home = ({ data, addAnswer }) => {
  return (
    <>
    <div className="grid-container">
                <div  className="galign" >
      <SideBar data={data} />
      </div>
      </div>

      <QuestionTabs addAnswer={addAnswer} data={data} />
      {/* <Footer/> */}
  
    </>
  );
};
export default Home;
