import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Home.css'; 

class Btn extends React.Component{
    constructor(props){
        super(props)
          
        // Set initial state
        this.state = {ques : 'question!'}
          
        // Binding this keyword
        this.rqfunc = this.rqfunc.bind(this)
        this.mrfunc = this.mrfunc.bind(this)
        this.rafunc = this.rafunc.bind(this)
        this.uafunc = this.uafunc.bind(this)
      }

      rqfunc(){ 
    
        // Changing state
        this.setState({ques : 'Recent Questions'})
      }
      mrfunc(){ 
    
        // Changing state
        this.setState({ques : 'Most Responses'})
      }
      rafunc(){ 
    
        // Changing state
        this.setState({ques : 'Recent Answered'})
      }
      uafunc(){ 
    
        // Changing state
        this.setState({ques : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500swhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'})
      }


    render(){
        return(<>
            <ButtonGroup aria-label="Basic example" id="btn" >
            <Button variant="dark" onClick={this.rqfunc}>Recent Questions</Button>
            <Button variant="dark" onClick={this.mrfunc}>Most Responses</Button>
            <Button variant="dark" onClick={this.rafunc}>Recently Answered</Button> 
            <Button variant="dark" onClick={this.uafunc}>Unanswered</Button>
            </ButtonGroup>
           <Container id="cont">
             <Card>
                 <div id='ques'>
                 {this.state.ques}
                 </div>
             </Card>
           </Container>
        </>
        ); 
    }
}

export default Btn;