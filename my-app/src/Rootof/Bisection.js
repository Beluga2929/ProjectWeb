import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";



var ans= 'ans';

class Bisection extends Component{
  
  constructor(){
    super();
   
}
  componentDidMount(){
    
  }  
  getValue(){
     var equation= document.getElementById("equation").value;
     var xl = document.getElementById("xL").value;
     var xr = document.getElementById("xR").value;
     var x,xo,fxm,fxr,answer,xm;
    
    do{
          xm=(Number(xl)+Number(xr))/2;
          xo=xm;
          x=xm;
          fxm=eval(equation);
          x=xr;
          fxr=eval(equation);
          if(Number(fxm)*Number(fxr)>0){
              xr=xm;
          }
          else if(Number(fxm)*Number(fxr) <0){
              xl=xm;
          }
          xm=(Number(xl)+Number(xr))/2;

          answer=Math.abs((Number(xm)-Number(xo))/Number(xm))*100;
      }while(answer>0.000001);
      ans=xm;
      document.getElementById("showEquation").innerHTML=ans;
 
  }

  render() {
  
    return(
        <div > 
              <h3>Bisection Method</h3>
          <Form>
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
          </Form>
          <h>ans =</h> <h id="showEquation"></h>
        
        </div>
    );
  }
 }
export default Bisection; 

