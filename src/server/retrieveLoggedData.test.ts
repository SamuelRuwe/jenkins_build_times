import { getData } from './retrieveLoggedData';

test('getData returns an array object with correct data', () => {
  const result = getData();
  expect(Array.isArray(result)).toEqual(true);
  expect(result.length === 31).toBe(true);
});
