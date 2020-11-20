import express from 'express';
import path from 'path';
import { fetchData } from './fetchJenkins';
import { jobLinks } from './jenkinsJobs';
import { removeFailures } from './filterData';
import { sortByBuildNumber } from './sortData';
import { getData } from './retrieveLoggedData';
import { appendNewData } from './appendJenkinsBuildData';

const app = express();

const fileLocation = path.join(__dirname, 'jenkinsBuildData.json');

app.get('/api/data', async (req, res) => {
  const data = await fetchData(jobLinks.MERGE_MASTER.link);
  // console.log("Appending Data!");
  appendNewData(data, fileLocation);
  const actualData = getData(fileLocation);
  const successfulBuilds = removeFailures(actualData);
  const sortedData = sortByBuildNumber(successfulBuilds);
  res.send(sortedData);
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
