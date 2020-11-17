let fetchData = async() => {
    let response = await fetch("data");
    let result = await response.json();
    return result;
    };

fetchData().then(data => {
    console.log(data);
    drawChart(data);
    setTitle();
});

const drawChart = (data) => {
    const svg = dimple.newSvg("body", 1000, 1000);
    let chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "buildNumber");
    chart.addMeasureAxis("y", "min");
    chart.addSeries(null, dimple.plot.line);
    chart.draw();
};

const setTitle = () => {
    let title = document.getElementById("title");
    title.innerText = "Merge-Master";
};
