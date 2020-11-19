import { removeFailures } from './filterData';
import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.ts';

const testData: expandedJenkinsBuildTimeData[] = [
  {
    buildNumber: '1618',
    date: '19 Nov 2020 9:2:09',
    result: null,
    duration: '00:00:00',
    minutes: 0
  },
  {
    buildNumber: '1617',
    date: '18 Nov 2020 18:28:36',
    result: 'SUCCESS',
    duration: '00:47:57',
    minutes: 47
  },
  {
    buildNumber: '1616',
    date: '18 Nov 2020 17:20:07',
    result: 'FAILURE',
    duration: '01:05:25',
    minutes: 65
  },
  {
    buildNumber: '1615',
    date: '18 Nov 2020 14:51:06',
    result: 'SUCCESS',
    duration: '01:04:51',
    minutes: 64
  },
  {
    buildNumber: '1614',
    date: '18 Nov 2020 13:40:47',
    result: 'ABORTED',
    duration: '00:31:30',
    minutes: 31
  },
  {
    buildNumber: '1613',
    date: '18 Nov 2020 12:32:49',
    result: 'SUCCESS',
    duration: '01:07:57',
    minutes: 67
  },
  {
    buildNumber: '1612',
    date: '18 Nov 2020 11:30:08',
    result: 'FAILURE',
    duration: '01:02:37',
    minutes: 62
  },
  {
    buildNumber: '1611',
    date: '18 Nov 2020 10:10:52',
    result: 'SUCCESS',
    duration: '01:18:13',
    minutes: 78
  },
  {
    buildNumber: '1610',
    date: '17 Nov 2020 14:24:53',
    result: 'FAILURE',
    duration: '01:08:58',
    minutes: 68
  },
  {
    buildNumber: '1609',
    date: '17 Nov 2020 13:5:01',
    result: 'FAILURE',
    duration: '01:02:03',
    minutes: 62
  },
  {
    buildNumber: '1608',
    date: '17 Nov 2020 11:47:35',
    result: 'FAILURE',
    duration: '01:13:17',
    minutes: 73
  },
  {
    buildNumber: '1607',
    date: '17 Nov 2020 10:43:06',
    result: 'FAILURE',
    duration: '01:03:49',
    minutes: 63
  },
  {
    buildNumber: '1606',
    date: '16 Nov 2020 17:31:45',
    result: 'FAILURE',
    duration: '01:06:22',
    minutes: 66
  },
  {
    buildNumber: '1605',
    date: '16 Nov 2020 15:50:41',
    result: 'FAILURE',
    duration: '01:07:47',
    minutes: 67
  },
  {
    buildNumber: '1604',
    date: '16 Nov 2020 14:32:38',
    result: 'FAILURE',
    duration: '01:09:11',
    minutes: 69
  },
  {
    buildNumber: '1603',
    date: '16 Nov 2020 13:20:43',
    result: 'FAILURE',
    duration: '01:11:54',
    minutes: 71
  },
  {
    buildNumber: '1602',
    date: '16 Nov 2020 12:6:08',
    result: 'FAILURE',
    duration: '01:14:32',
    minutes: 74
  },
  {
    buildNumber: '1601',
    date: '13 Nov 2020 16:23:09',
    result: 'SUCCESS',
    duration: '01:06:41',
    minutes: 66
  },
  {
    buildNumber: '1600',
    date: '13 Nov 2020 15:11:41',
    result: 'SUCCESS',
    duration: '01:07:51',
    minutes: 67
  },
  {
    buildNumber: '1599',
    date: '13 Nov 2020 13:48:07',
    result: 'FAILURE',
    duration: '00:09:25',
    minutes: 9
  },
  {
    buildNumber: '1598',
    date: '13 Nov 2020 10:26:07',
    result: 'SUCCESS',
    duration: '01:17:43',
    minutes: 77
  },
  {
    buildNumber: '1597',
    date: '13 Nov 2020 9:12:07',
    result: 'FAILURE',
    duration: '00:22:26',
    minutes: 22
  },
  {
    buildNumber: '1596',
    date: '12 Nov 2020 18:24:04',
    result: 'SUCCESS',
    duration: '01:19:13',
    minutes: 79
  },
  {
    buildNumber: '1595',
    date: '12 Nov 2020 17:14:11',
    result: 'FAILURE',
    duration: '01:08:34',
    minutes: 68
  },
  {
    buildNumber: '1594',
    date: '12 Nov 2020 15:44:14',
    result: 'FAILURE',
    duration: '01:10:52',
    minutes: 70
  },
  {
    buildNumber: '1593',
    date: '12 Nov 2020 14:32:18',
    result: 'FAILURE',
    duration: '01:11:55',
    minutes: 71
  },
  {
    buildNumber: '1592',
    date: '12 Nov 2020 13:20:08',
    result: 'FAILURE',
    duration: '01:12:09',
    minutes: 72
  },
  {
    buildNumber: '1591',
    date: '12 Nov 2020 9:57:07',
    result: 'SUCCESS',
    duration: '01:03:28',
    minutes: 63
  },
  {
    buildNumber: '1590',
    date: '11 Nov 2020 15:30:14',
    result: 'SUCCESS',
    duration: '01:06:15',
    minutes: 66
  },
  {
    buildNumber: '1589',
    date: '11 Nov 2020 13:38:09',
    result: 'FAILURE',
    duration: '01:06:59',
    minutes: 66
  },
  {
    buildNumber: '1588',
    date: '11 Nov 2020 11:30:14',
    result: 'SUCCESS',
    duration: '01:04:46',
    minutes: 64
  }
];

test('expect removeFailures to return only successes', () => {
  const result = removeFailures(testData);
  const failures = result.filter((x: expandedJenkinsBuildTimeData) => x.result !== 'SUCCESS');
  expect(failures.length).toEqual(0);
});
