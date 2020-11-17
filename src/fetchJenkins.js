const fetch = require("node-fetch");
const timeConv = require('./time');
const SUCCESS = 'SUCCESS';

let fetchData = async(url) => {
    let response = await fetch(url);
    let result = await response.json();
    let success = result.allBuilds.filter(x => {
        return x.result === SUCCESS;
    });
    let desiredData = success.map(x => {
        let buildNumber = x.id;
        let date = timeConv.timeConverter(x.timestamp);
        let duration = timeConv.durationConverter(x.duration);
        let min = timeConv.sec2min(x.duration);
        return {buildNumber, min};
    });
    return desiredData;
}

exports.fetchData = fetchData;
