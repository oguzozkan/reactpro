import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';


function Tempcond() {
  const [platformValue, plaftormInputProps] = useRadioButtons("platform");

  return (
    <div className="tempclas">
      <form>
        <fieldset>
         Temperature
          <input
            value="temperature"
            checked={platformValue === "temperature"}
            {...plaftormInputProps}
          />
          Condition
          <input
            value="Condition"
            checked={platformValue === "Condition"}
            {...plaftormInputProps}
          />
          Both
          <input
            value="both"
            checked={platformValue === "both"}
            {...plaftormInputProps}
          />
        </fieldset>
      
      </form>
    </div>
  );
}

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tempcond />, rootElement);
export default Tempcond;
