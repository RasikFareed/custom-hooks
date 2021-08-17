import React from "react";
import Chart from "chart.js/auto";

const useChart = (nodeRef, options) => {
  React.useEffect(() => {
    // if (nodeRef && nodeRef.current) {
    //   const chart = Chart.getChart(nodeRef.current.id);
    //   if (chart) {
    //     chart.destroy();
    //   }
    //   new Chart(nodeRef.current, options);
    // } else {
    //   new Chart(nodeRef.current, options);
    // }
    const chart = Chart.getChart(nodeRef.current.id);
    if (chart) {
      chart.destroy();
    }
    new Chart(nodeRef.current, options);

    console.log("render");
  }, [nodeRef, options]);

  return {};
};

export default useChart;
