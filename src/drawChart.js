const fetchData = async () => {
  const response = await fetch('data');
  const result = await response.json();
  return result;
};

const drawChart = (data) => {
  const svg = dimple.newSvg('body', 1000, 1000);
  const chart = new dimple.chart(svg, data);
  chart.addCategoryAxis('x', 'buildNumber');
  chart.addMeasureAxis('y', 'min');
  chart.addSeries(null, dimple.plot.line);
  chart.draw();
};

const setTitle = () => {
  const title = document.getElementById('title');
  title.innerText = 'Merge-Master';
};

fetchData().then((data) => {
  console.log(data);
  drawChart(data);
  setTitle();
});
