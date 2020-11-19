const express = require('express');

const app = express();
const path = require('path');
const { fetchData } = require('./fetchJenkins.js');
const { jobLinks } = require('./jenkinsJobs.js');

app.get('/api/data', (req, res) => {
  fetchData(jobLinks.MERGE_MASTER.link)
    .then((data) => res.send(data));
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
