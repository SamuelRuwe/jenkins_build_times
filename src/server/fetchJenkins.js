import fetch from 'node-fetch';
import { durationToMinutes } from './time.ts';

const SUCCESS = 'SUCCESS';

const fetchData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  const success = result.allBuilds.filter((x) => x.result === SUCCESS);
  const desiredData = success.map((x) => {
    const buildNumber = x.id;
    // const date = timeConv.timeConverter(x.timestamp);
    // const duration = timeConv.durationConverter(x.duration);
    const minutes = durationToMinutes(x.duration);
    return { buildNumber, minutes };
  });
  return desiredData;
};

export { fetchData };
