import React from "react";
import LineChart from "./components/LineChart.js";
import "./App.css";

const App = () => {
  const prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Avg high temps',
          data: []
        }
      ]
    }
  
    data.temperatures.forEach(temperature => {
      chartData.labels.push(temperature.month)
      chartData.datasets[0].data.push(temperature.average_high_f)
    })
    return chartData
  }
  
  const getData = () => {
    fetch("/locations/1")
      .then((response) => response.json())
      .then((jData) => prepareData(jData))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <LineChart />
    </div>
  );
};

export default App;