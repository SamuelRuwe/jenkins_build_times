const express = require('express');
const app = express();
const path = require('path');
const { fetchData } = require('./fetchJenkins.js');
const { jobLinks } = require('./jenkinsJobs.js');

let requestedJob = 'merge-master';

app.get('/api', (req,res) => {
    console.log("I was called!");
    res.send({test: 'test'});
});

// app.get('/api/data', (req, res) => {
//   let variableBoii = jobLinks.MERGE_MASTER.link;
//   if (requestedJob === jobLinks.MERGE_MASTER.request) {
//     variableBoii = jobLinks.MERGE_MASTER.link;
//   } else if (requestedJob === jobLinks.MERGE_SEQUENCE_SEARCH.request) {
//     variableBoii = jobLinks.MERGE_SEQUENCE_SEARCH.link;
//   } else if (requestedJob === jobLinks.STN_PLANARIA_BUILD.request) {
//     variableBoii = jobLinks.STN_PLANARIA_BUILD.link;
//   }
//   fetchData(variableBoii).then((data) => res.send(data));
// });

// app.get('/api/:jobRequest', (req, res) => {
//   requestedJob = req.params.jobRequest;
//   res.send("testing");
// });

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
