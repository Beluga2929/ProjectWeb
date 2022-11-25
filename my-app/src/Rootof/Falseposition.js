import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";



var ans= 'ans';

class Falseposition extends Component{
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
     var xl = document.getElementById("xL").value;
     var xr = document.getElementById("xR").value;
     var x,xo,fxr,fxl,answer,x1,fx1;
    
    do{
        x=xl;
        fxl=eval(equation);
        x=xr;
        fxr=eval(equation);
        x1=((Number(xl)*Number(fxr))-((Number(xr)*Number(fxl)))/(Number(fxr)-Number(fxl)));
        xo=x1;
        x=x1;
        fx1=eval(equation);
        if(Number(fx1)*Number(fxr)>0){
              xr=x1;
          }
          else if(Number(fx1)*Number(fxr) <0){
              xl=x1;
          }
        x1=((Number(xl)*Number(fxr))-((Number(xr)*Number(fxl)))/(Number(fxr)-Number(fxl)));
        answer=Math.abs((Number(x1)-Number(xo))/Number(x1))*100;
      }while(answer>0.000001);
      ans=x1;
      document.getElementById("showEquation").innerHTML=ans;
      //document.getElementById("showX").innerHTML=xL;
     
  }
  
  render() {
    console.log("render called")
    return(
        <div >
              <h3>False-position Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                input number
              </Form.Label>
              <div>
                <Form.Control id="equation" type="text" step="1" placeholder="equation" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="xL" type="number" step="1" placeholder="xl" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="xR" type="number" step="1" placeholder="xr" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
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
export default Falseposition; 

