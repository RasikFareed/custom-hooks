import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import useChart from "./useChart";

function App() {
  const canvasRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=431d9c8a588a44468ec64119211708&q=Coimbatore&days=1&aqi=no&alerts=no"
    )
      .then((response) => response.json())
      .then((data) => {
        const hourlyData = data.forecast.forecastday[0].hour;
        setData({
          values: hourlyData.map((temp) => temp.temp_c),
          label: hourlyData.map((temp) => temp.time.split(" ")[1]),
        });
        //setLabel(hourlyData.map((temp) => temp.time));
      });
  }, []);
  useChart(canvasRef, {
    type: "line",
    data: {
      labels: data.label,
      datasets: [
        {
          label: "Temperature °C",
          data: data.values,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "#ff0000",
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  return (
    <div className="App">
      <h1>Coimbatore Weather Forecast Data For Today </h1>
      <canvas id="weatherChart" ref={canvasRef} width="400" height="100" />
    </div>
  );
}

export default App;
