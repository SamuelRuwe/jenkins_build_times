import path from 'path';
import { appendNewData } from './appendJenkinsBuildData';
import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';
import fs from 'fs';

const fileLocation = path.join(__dirname, 'jenkinsBuildData.json');

const writeFile = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => null);

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
  expect(writeFile).toHaveBeenCalled();
});
