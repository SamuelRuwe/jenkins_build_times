import express from 'express';
const app = express();
import { fetchData } from './fetchJenkins.js';
import { jobLinks } from './jenkinsJobs.js';

app.get('/api/data', (req , res) => {
  fetchData(jobLinks.MERGE_MASTER.link)
    .then((data) => res.send(data));
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
