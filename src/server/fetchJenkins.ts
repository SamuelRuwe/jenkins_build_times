import fetch from 'node-fetch';
import { unixTimestampToDate, durationToMinutes, durationToHours } from './time';
import { jenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const responseData = await response.json();
  const desiredData = responseData.allBuilds.map((data: jenkinsBuildTimeData) => {
    const buildNumber = data.id;
    const date = unixTimestampToDate(data.timestamp);
    const duration = durationToHours(data.duration);
    const minutes = durationToMinutes(data.duration);
    const { result } = data;
    return {
      buildNumber, date, result, duration, minutes
    };
  });
  return desiredData;
};

export { fetchData };
