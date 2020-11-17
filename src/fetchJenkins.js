const fetch = require('node-fetch');
const timeConv = require('./time');

const SUCCESS = 'SUCCESS';

const fetchData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  const success = result.allBuilds.filter((x) => x.result === SUCCESS);
  const desiredData = success.map((x) => {
    const buildNumber = x.id;
    const date = timeConv.timeConverter(x.timestamp);
    const duration = timeConv.durationConverter(x.duration);
    const min = timeConv.sec2min(x.duration);
    return { buildNumber, min };
  });
  return desiredData;
};

exports.fetchData = fetchData;
