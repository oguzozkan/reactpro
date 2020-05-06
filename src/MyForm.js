import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {js_text} from './zip_js';


class MyForm extends React.Component {

  

constructor(props){
  super(props);
  
  this.state = {
    condition: '',
    temp: null,
    file:''
  }
  
  this.updateInput = this.updateInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  updateInput(event){
  this.setState({condition : event.target.value})
  this.setState({temp : event.target.value})  
  
 
  }
  

  handleCondition = (event) => {
    const condition = event.target.value
    this.setState({ condition: condition })
  
  }

  handleTempeture = (event) => {
    const temp = event.target.value
    this.setState({ temp: temp })
  
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      condition,
      temp,
    } = this.state
;
alert(condition);
alert(temp);
var res =js_text;
res = js_text.replace(/varcondition/, condition);
var res1 = res.replace(/vartemp/, temp);

alert(res1);
return (
<p>{res1}</p>

);
  }
  
  render(){
  return (
     
   
   <form>
   <h1> {this.state.condition} </h1>
   <h2>{this.state.temp}</h2>
   <div className='formcond'>
   <input

     type='text'
     name='condition'
     placeholder="Enter Creative Name"
     onChange={this.handleCondition}
   />
        </div>
        <div className='formcond2'>

   <input
     type='text'
     name='temp'
     placeholder="Tempature"
     onChange={this.handleTempeture}
   
     
   />

<div className='butdiv'>
  <input type="submit" className='createbutton' onClick={this.handleSubmit} ></input>
  </div>
</div>
  
   </form>
   
   
   );
  }
  } 
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm;
