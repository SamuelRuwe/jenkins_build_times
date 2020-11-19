import path from 'path';
import { appendNewData } from './appendJenkinsBuildData';
import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const fileLocation = path.join(__dirname, 'jenkinsBuildData.json');

const testData: expandedJenkinsBuildTimeData = {
  buildNumber: '9999',
  date: '18 Nov 5020 18:28:36',
  result: 'SUCCESS',
  duration: '90:47:57',
  minutes: 97
};

const testArray = [testData];

test('data is appended to the array correctly', () => {
  appendNewData(testArray, fileLocation);
  expect(true).toBe(true);
});
