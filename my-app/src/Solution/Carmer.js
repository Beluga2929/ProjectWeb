import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto",
};
const DIV ={
  width:"100%",
  margin:"0 auto",
};

var ans= 'ans';

class Carmer extends Component{
  stat={Num:null,Rootof:null};
  constructor(){
    super();
    console.log("constuctor called");
}
  componentDidMount(){
    console.log("componentDidMount called");
  }  
  createinputbox =()=>{
    var Size = document.getElementById("Matsize").value;
    console.log(Size)
    var MatString = '';
    for(var i=0;i<Size;i++){
      for(var j=0;j<Size;j++){
        MatString +="<input id='Mat"+i+j+"' type='float' style='width:50px;margin:1px'/>";
      }
      MatString +=" | <input id='Matans"+i+"0' type='float' style='width:50px;margin:1px'/>";
      MatString +="<br>";
    }
    //console.log(MatString);
    document.getElementById("MatInput").innerHTML=MatString;
}
  
  
  render() {
    console.log("render called")
    return(
        <div >
          <div style={mainDiv}>
            <div style={DIV}>
            
              <h3>CramersRule Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                input number
              </Form.Label>
              <div>
                <Form.Control id="Matsize" type="number" step="1" placeholder="1" style={{width:"20%",margin : "0 auto"}} onChange={this.createinputbox}></Form.Control>
                
               
            </div>
            {/* <Button onClick={this.createinputbox}>
              sumit
            </Button> */}
            
            
            
            </Form.Group>
          </Form>
        
          
          <div id="MatInput"></div>
          <h>ans =</h> <h id="showEquation"></h>
        </div>
          
          
         </div>
        
      </div>
    );
  }
 }
export default Carmer; 

