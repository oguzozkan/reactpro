import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';


function Screen() {
 
  const [screenValue, screenInputProps] = useRadioButtons("screen");
  return (
    <div className="screen">
      <form>
        <fieldset>
          Sunrise
          <input
            value="sunrise"
            checked={screenValue === "sunrise"}
            {...screenInputProps}
          />
          Coffin
          <input
            value="coffin"
            checked={screenValue === "coffin"}
            {...screenInputProps}
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
ReactDOM.render(<Screen />, rootElement);
export default Screen;
