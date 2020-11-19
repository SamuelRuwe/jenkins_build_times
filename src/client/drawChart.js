import Chart from 'chart.js';

const config = (labelData, dataData) => ({
  type: 'line',
  data: {
    labels: labelData,
    datasets: [{
      label: 'Sam',
      backgroundColor: 'white',
      borderColor: 'black',
      data: dataData,
      fill: false,
      yAxisID: 'y-axis'
    }]
  },
  options: {
    responsive: true,
    title: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        id: 'y-axis',
        type: 'linear',
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

const makeChart = (x, y) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  new Chart(ctx, config(x, y));
};

export { makeChart };
