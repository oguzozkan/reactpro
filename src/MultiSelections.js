
import React from "react";
import './App.css';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import {js_text} from './zip_js';

const wheatherar = []

const weathers = [ "Sunny", "Intermittent Clouds", "Cloudy", "Fog", "Showers", "T-Storms", "Rain","Snow", "Ice","Clear","Windy"];
class MultiSelections extends React.Component {
    state = {
        value: [
            { text: 'Sunny', id: 1 },
            { text: 'Intermittent', id: 2 },
            { text: "Cloudy", id: 3 }
        ]
    };
    state = { value: [] };

    handleChange = (event) => {

    //const temp = event.target.value
    wheatherar.push(event.target.value);
        this.setState({
            value: event.target.value
        });
    }
   /* handleSubmit = (event) => {
        event.preventDefault()
    
        const {
            wheatherar,
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
      }*/

    render() {
        return (
            <div>
                   <div className="example-config">
                    {this.state.value}
                </div>
          
                <MultiSelect
                    data={weathers}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


  
  ReactDOM.render(
    <MultiSelections />,
    document.getElementById('root')
  );
  

export default MultiSelections;

/*

import React from "react";
import './App.css';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import {js_text} from './zip_js';

const wheatherar = {}
const Weathers = [
  { text: "Sunny", id: 1 },
  { text: "Intermittent Clouds", id: 2 },
  { text: "Cloudy", id: 3 },
  { text: "Fog", id: 4 },
  { text: "Showers", id: 5 },
  { text: "T-Storms", id: 6 },
  { text: "Rain", id: 7 },
  { text: "Snow", id: 8 },
  { text: "Ice", id: 9 },
  { text: "Clear", id: 10 },
{ text: "Windy", id: 11 }
];

class MultiSelections extends React.Component {
    state = {
        value: [
            { text: 'Sunny', id: 1 },
            { text: 'Intermittent', id: 2 },
            { text: "Cloudy", id: 3 }
        ]
    };

    handleChange = (event) => {
         wheatherar.whether = event.target.value
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div  >
                  <div className="example-config">
                    Selected Values: 
                    {JSON.stringify(wheatherar)}
                </div>
                <MultiSelect
                    data={Weathers}
                    onChange={this.handleChange}
                    id={this.state.id}
                    textField="text"
                    dataItemKey="id"
                />
            </div>
          
        );
    }
}



  
  ReactDOM.render(
    <MultiSelections />,
    document.getElementById('root')
  );
  

export default MultiSelections;

*/