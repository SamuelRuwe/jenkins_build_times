import { getData } from './retrieveLoggedData';
import path from 'path';

const fileLocation = path.join(__dirname, 'jenkinsBuildData.json');

test('getData returns an array object with correct data', () => {
  const result = getData(fileLocation);
  expect(Array.isArray(result)).toEqual(true);
  expect(result.length >= 1).toBe(true);
});
