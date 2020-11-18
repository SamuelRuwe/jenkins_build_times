import './index.css';
import {fetchData, drawChart} from './drawChart.js';

 const component = () => {
    fetch('/api')
    .then(response => response.json())
    .then(x => console.log(x));

   return document.createElement('div');
 }

document.body.appendChild(component());
