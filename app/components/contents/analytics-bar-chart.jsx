import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

const BarChart = ({ chartData }) => {
  useEffect(() => {
    // Predefined color scheme
    const colors = [
      "rgba(75, 192, 192, 0.5)",
      "rgba(255, 99, 132, 0.5)",
      "rgba(54, 162, 235, 0.5)",
      "rgba(255, 159, 64, 0.5)",
      "rgba(153, 102, 255, 0.5)",
      "rgba(255, 206, 86, 0.5)",
      "rgba(231,233,237, 0.5)",
      "rgba(161, 160, 157, 0.5)",
      "rgba(102, 204, 255, 0.5)",
      "rgba(255, 102, 204, 0.5)",
    ];

    // Create charts
    chartData.forEach((data, index) => {
      const canvasId = `barChart-${index}`;
      console.log(canvasId);
      console.log("hello world");
      const ctx = document.getElementById(canvasId);
      ctx.setAttribute("height", "200");
      //   ctx.setAttribute("width", "1000");
      console.log("ctx: " + ctx.ATTRIBUTE_NODE);
      if (ctx) {
        const config = {
          type: "bar",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: data.title,
                backgroundColor: colors[index % colors.length], // Use predefined colors cyclically
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
