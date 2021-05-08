import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LpNav from './LpNav';

class LpCard extends React.Component{
    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React",
    //       showHideLog: false,
          
    //       showHideSign: false
    //     };
    //     //this.hideComponent = this.hideComponent.bind(this);
    //   }
    //   hideComponent(name) {
    //     console.log(name);
    //     switch (name) {
    //         case "showHideLog":
    //             this.setState({ showHideLog: !this.state.showHideLog });
    //             this.setState({ showHideSign: !this.state.showHideSign });
    //             break;
    //           case "showHideSign":
    //             this.setState({ showHideSign: !this.state.showHideSign });
    //             this.setState({ showHideLog: !this.state.showHideLog });
    //             break;
    //         default:
    //           this.setState({ showHideLog: !this.state.showHideLog});
    //     }
    //   }
    render(){
        // const { showHideLog, showHideSign } = this.state;
        return(
            <Card>
  <Card.Header>
   {/* <LpNav /> */}
  </Card.Header>
  <Card.Body>
  <div>
  <LpNav />
  {/* {showHideLog && <LoginForm />}
  {showHideSign && <SignupForm />} */}
  </div>
{/* <div id="uyt">
{/* <SignupForm />
</div> */}
  </Card.Body>
</Card>
        );
    }
}
export default LpCard;