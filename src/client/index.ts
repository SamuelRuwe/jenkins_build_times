import './index.css';
import { makeChart } from './drawChart';

const buildNumber: number[] = [];
const min: number[] = [];

interface jenkinsData {
    buildNumber: number;
    minutes: number;
}

const component = async () => {
  const response = await fetch('/api/data');
  const a = await response.json();
  a.map((val: jenkinsData) => {
    buildNumber.push(val.buildNumber);
    min.push(val.minutes);
  });
  makeChart(buildNumber, min);
};

component();
