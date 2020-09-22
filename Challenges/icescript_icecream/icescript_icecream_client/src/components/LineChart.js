import React, {useEffect } from 'react';
import Chart from 'chart.js'

const LineChart = () => {

    const prepareData = (data) => {
		const chartData = {
			labels: [],
			datasets: [
				{
					label: 'pints sold',
					data: []
				}
			]
		}
	
		data.pints.forEach(pint => {
			chartData.labels.push(pint.month)
			chartData.datasets[0].data.push(pint.pints_sold)
		})
		return chartData
	};

  const createChart = (data) => {
    const ctx = document.querySelector("#pints");
    const pintsChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  };

  const getData = () => {
    fetch("/ice_creams/1")
      .then((response) => response.json())
      .then((jData) => prepareData(jData))
      .then((data) => createChart(data))
      .catch((err) => console.log(err));
  };
    
    useEffect(() => {
        getData();
    }, []);

	return (
	  <>
	    <h1>Pints</h1>
	    <canvas id="pints" width="300" height="100"></canvas>
	  </>
	)
}

export default LineChart