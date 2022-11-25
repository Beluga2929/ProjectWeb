import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

var ans= 'ans';

class Secant extends Component{
  stat={Num:null,Rootof:null};
  constructor(){
    super();
    console.log("constuctor called");
}
  componentDidMount(){
    console.log("componentDidMount called");
  }  
  getValue(){
     var equation= document.getElementById("equation").value;
     var x0 = document.getElementById("x0").value;
     var x1 = document.getElementById("x1").value;
     var x,x0,x2,df,fx0,answer,x1,fx1;
    
    do{
        x=x0;
        fx0=eval(equation);
        x=x1;
        fx1=eval(equation);
        df=((Number(fx1)-Number(fx0))/(Number(x1)-Number(x0)));
        x2=(Number(x1)-(Number(fx1)/Number(df)));
        x0=x1;
        x1=x2;
       
        answer=Math.abs((Number(x1)-Number(x0))/Number(x1))*100;
      }while(answer>0.000001);
      ans=x2;
      document.getElementById("showEquation").innerHTML=ans;
  
     
  }
  
  render() {
    console.log("render called")
    return(
        <div >

              <h3>Secant Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                input number
              </Form.Label>
              <div>
                <Form.Control id="equation" type="text" step="1" placeholder="equation" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="x0" type="number" step="1" placeholder="x0" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="x1" type="number" step="1" placeholder="x1" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
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
export default Secant; 
