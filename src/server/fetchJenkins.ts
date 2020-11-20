import fetch from 'node-fetch';
import { unixTimestampToDate, durationToMinutes, durationToHours } from './time';
import { jenkinsBuildTimeData, expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const responseData = await response.json();
  const desiredData = responseData.allBuilds.map((data: jenkinsBuildTimeData) => {
    return formatJenkinsData(data);
  });
  return desiredData;
};

const formatJenkinsData = ({id, timestamp, duration, result}: jenkinsBuildTimeData) => {
    const buildNumber = id;
    const date = unixTimestampToDate(timestamp);
    const hourDuration  = durationToHours(duration);
    const minutes = durationToMinutes(duration);
    const formattedData: expandedJenkinsBuildTimeData = {
        buildNumber, date, duration: hourDuration, minutes, result
    };
    return formattedData;
}

export { fetchData };
