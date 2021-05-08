import './App.css';
import Navv from './Navbar';
import Btn from './buttongroup';
import Popq from './PopularQues';
import Statc from './Statcard';
import React from 'react';


class Home extends React.Component{
  render(){
  return (<>
  <Navv />
  <Btn />
  <Statc />
  <Popq />
  </>
  );
}}

export default Home;
