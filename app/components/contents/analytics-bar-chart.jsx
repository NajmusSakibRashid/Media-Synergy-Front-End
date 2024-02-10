import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

const BarChart = ({ chartData }) => {
  useEffect(() => {
    // Create charts
    chartData.forEach((data, index) => {
      const canvasId = `barChart-${index}`;
      const ctx = document.getElementById(canvasId);
      if (ctx) {
        const config = {
          type: "bar",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: data.title,
                backgroundColor: `rgba(${getRandomColor()}, 0.6)`, // Generate random color for each bar
                data: data.data,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: Math.max(...data.data) * 1.1,
              },
            },
          },
        };
        new Chart(ctx, config);
      }
    });

    // Clean up function
    return () => {
      // Destroy all charts to prevent memory leaks
      chartData.forEach((data, index) => {
        const canvasId = `barChart-${index}`;
        const ctx = document.getElementById(canvasId);
        if (ctx) {
          const chartInstance = Chart.getChart(ctx);
          if (chartInstance) {
            chartInstance.destroy();
          }
        }
      });
    };
  }, [chartData]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div>
      {chartData.map((data, index) => (
        <div key={index} className="card p-2 shadow-xl">
          <div className="card card-title self-start">{data.title}</div>
          <canvas id={`barChart-${index}`} width="400" height="200"></canvas>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
