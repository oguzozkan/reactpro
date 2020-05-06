import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import About from './About';
import Nav from "./Nav";
import Creative from "./Creative";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MyForm from "./MyForm";
import Tempcond from "./Tempcond";
import Screen from "./screen"; 
import Header from './backGround';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import FileInput from './FileInput';
import MultiSelections  from './MultiSelections';



const animatedComponents = makeAnimated();

const Weathers = [
  { label: "Sunny", value: 1 },
  { label: "Intermittent Clouds", value: 2 },
  { label: "Cloudy", value: 3 },
  { label: "Fog", value: 4 },
  { label: "Showers", value: 5 },
  { label: "T-Storms", value: 6 },
  { label: "Rain", value: 7 },
  { label: "Snow", value: 8 },
  { label: "Ice", value: 9 },
  { label: "Clear", value: 10 },
{ label: "Windy", value: 11 }
];

function App() {
  return (
    <Router>
    
    <div className="App">

<Nav />
<Screen/>
<MyForm />

<Tempcond />

<Route path="/about" component={About}/>
<Route path="/creative" component={Creative}/>
<Header/>

<multiSelection/>


<div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Weathers} components={animatedComponents}
              isMulti />
              <h1 text= {Weathers.values}/>
          </div>
          
  <div className="col-md-4"></div>
        </div>
      </div>
      
    </div>
   <FileInput />

    <Form/>
    <MultiSelections/>
    </Router>
    
    
    );
}


export default App;
