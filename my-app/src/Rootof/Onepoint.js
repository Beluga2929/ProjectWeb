import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";


var ans= 'ans';

class Onepoint extends Component{

  constructor(){
    super();
    console.log("constuctor called");
}
  componentDidMount(){
    console.log("componentDidMount called");
  }  
  getValue(){
     var equation1= document.getElementById("equation1").value;
     
     var x = document.getElementById("x").value;
    
     var x,answer,x1,xo;
     
        x1 = eval(equation1);
    do{
        xo=x1;
        x1 = eval(equation1);
        answer=Math.abs((Number(x1)-Number(xo))/Number(x1))*100;
      }while(answer>0.000001);
      ans=x1;
      document.getElementById("showEquation").innerHTML=ans;

     
  }
  
  render() {
    console.log("render called")
    return(
        <div >

              <h3>One-Point Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                input number
              </Form.Label>
              <div>
                <Form.Control id="equation1" type="text" step="1" placeholder="equation1" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                
                <Form.Control id="x" type="number" step="1" placeholder="x" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
               
            </div>
             <Button onClick={this.getValue}>
              sumit
            </Button>

            </Form.Group>
          </Form>
        
          <h>ans =</h> <h id="showEquation"></h>

        </div>
    );
  }
 }
export default Onepoint; 

