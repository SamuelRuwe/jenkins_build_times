import express from 'express';
import { fetchData } from './fetchJenkins';
import { jobLinks } from './jenkinsJobs';
import { removeFailures } from './filterData';
import { sortByBuildNumber } from './sortData';

const app = express();

app.get('/api/data', async (req, res) => {
  const data = await fetchData(jobLinks.MERGE_MASTER.link);
  const successfulBuilds = removeFailures(data);
  const sortedData = sortByBuildNumber(successfulBuilds);
  res.send(sortedData);
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
