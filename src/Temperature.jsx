import React, {useState} from "react";
// import "./app.css";



function Temperature() {
    const [temperature, setTemperature] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");
  
    const increaseTemperature = () => {
      if(temperature === 30) return;
      const newTemperature = temperature + 1;
  
      if (newTemperature >= 15) {
        setTemperatureColor("hot");
      }
  
      setTemperature(newTemperature);
    };
  
    const decreaseTemperature = () => {
      if(temperature === 0) return;
      const newTemperature = temperature - 1;
  
      if (newTemperature < 15) {
        setTemperatureColor("cold");
      }
  
      setTemperature(newTemperature);
    };
  
    return (
      <div className="app-container">
        <div className="tempt-display-container">
          <div className={`tempt-display ${temperatureColor}`}>
            {temperature}
            <span>&#8451;</span>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => increaseTemperature()}>+</button>
          <button onClick={() => decreaseTemperature()}>-</button>
        </div>
      </div>
    );
  }
  
  export default Temperature;
  