import fs from 'fs';
import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';
import { getData } from './retrieveLoggedData';

const appendNewData = (newData: expandedJenkinsBuildTimeData[], file: string) => {
  const combinedData = findNewData(newData);
  fs.writeFileSync(file, JSON.stringify(combinedData, null, 2));
};

const findNewData = (newData: expandedJenkinsBuildTimeData[]) => {
  const currentBuildData = getData();
  const currentBuildNumbers = getCurrentBuildnumbers(currentBuildData);
  const dataToBeAppended = newData.filter((data) => (data !== null && !currentBuildNumbers.includes(data.buildNumber)));
  return currentBuildData.concat(dataToBeAppended);
};

const getCurrentBuildnumbers = (currentData: expandedJenkinsBuildTimeData[]) => currentData.map((data: expandedJenkinsBuildTimeData) => data.buildNumber);

export { appendNewData };
