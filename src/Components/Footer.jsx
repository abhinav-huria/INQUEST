import React from 'react';
import './Home.css';
import { FaInstagramSquare, FaGithubSquare,FaLinkedin,FaReact,FaBootstrap,FaJsSquare,
    FaCss3Alt,FaHtml5} from "react-icons/fa";
class Footer extends React.Component{
    render(){
        return (
          <>
          <div  id="ffooter">
<div class="row">
          <div class="col-lg">
          <ul id="team"> 
          <h5>Meet the Team</h5>
              <li>Abhinav Huria</li>
              <li>Muskan</li>
              <li>Nandini Gupta</li>
              <li>Radhika Goel</li>
          </ul>
          </div>

          <div class="col-lg">
          <ul id="contact">
              <li><h5>Contact us on: </h5> </li>
              <li><FaInstagramSquare/></li>
              <li><FaGithubSquare/></li>
              <li><FaLinkedin/></li>
          </ul>
       
         <br></br>
            <ul id="build">
            <li><h5>Built with: </h5></li>
                <li><FaReact/></li>
                <li><FaBootstrap/></li>
                <li><FaJsSquare/></li>
                <li><FaCss3Alt/></li>
                <li><FaHtml5/></li>
            </ul>
          </div>
</div>
          </div>
          </>
          );
          }
          
}
export default Footer;