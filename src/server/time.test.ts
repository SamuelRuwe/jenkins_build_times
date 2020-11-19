import { unixTimestampToDate, durationToMinutes, durationToHours } from './time.ts';

test('timeConverter works', () => {
  const TEST_UNIX_TIMESTAMP = 1269711082;
  const result = unixTimestampToDate(TEST_UNIX_TIMESTAMP);
  const expected = '15 Jan 1970 11:41:51';
  expect(result).toEqual(expected);
});

test('durationToMinutes returns no hours if greater than sixty', () => {
  const duration = 2877010;
  const result = durationToMinutes(duration);
  const expected = 47;
  expect(result).toEqual(expected);
});

test('durationToHours returns correct hours', () => {
  const duration = 3925454;
  const result = durationToMinutes(duration);
  const expected = 65;
  expect(result).toEqual(expected);
});

test('durationToHours returns two digits for hours if no hours', () => {
  const duration = 2877010;
  const result = durationToHours(duration);
  const expected = '00:47:57';
  expect(result).toEqual(expected);
});

test('durationToHours returns correct hours', () => {
  const duration = 3925454;
  const result = durationToHours(duration);
  const expected = '01:05:25';
  expect(result).toEqual(expected);
});
