import './index.css';
import { makeChart } from './drawChart';

let buildNumber: number[] = [];
let min: number[] = [];

interface jenkinsData {
    buildNumber: number;
    min: number;
}
const component = async () => {
  let response = await fetch('/api/data');
  let a = await response.json();
  a.map((val: jenkinsData)  => {
      buildNumber.push(val.buildNumber);
      min.push(val.min);
  });
  makeChart(buildNumber, min);
};

component();
