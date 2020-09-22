import React from "react";
import LineChart from "./components/LineChart.js";
import "./App.css";

const App = () => {

  const getData = () => {
    fetch('/ice_creams')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err))  
  }
  
  getData();

  return (
    <div className="App">
      <LineChart />
    </div>
  );
};

export default App;