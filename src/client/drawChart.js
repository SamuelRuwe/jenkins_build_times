import Chart from 'chart.js';

const config = (x, y) => ({
  type: 'line',
  data: {
    labels: x,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'red',
      borderColor: 'blue',
      data: y,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Sam Makes a Chart'
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
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'BuildNumber'
        }
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }
    }
  }
});

const makeChart = (x,y) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  new Chart(ctx, config(x,y));
};

export { makeChart };
