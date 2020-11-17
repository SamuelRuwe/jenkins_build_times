const express = require('express');
const app = express();
const { fetchData } = require('./fetchJenkins');
const { jobLinks } = require('./jenkinsJobs');
const path = require('path');


app.use(express.static('./'));

let requestedJob = 'merge-master';

app.get('favicon.ico', (req, res) => res.status(204));

app.get('/data', (req, res) => {
    let variableBoii = jobLinks.MERGE_MASTER.link;
    if(requestedJob === jobLinks.MERGE_MASTER.request) {
        variableBoii = jobLinks.MERGE_MASTER.link;
    }
    else if(requestedJob === jobLinks.MERGE_SEQUENCE_SEARCH.request) {
        variableBoii = jobLinks.MERGE_SEQUENCE_SEARCH.link;
    }
    else if(requestedJob === jobLinks.STN_PLANARIA_BUILD.request) {
       variableBoii = jobLinks.STN_PLANARIA_BUILD.link;
    }
    fetchData(variableBoii).then(data => res.send(data));
});


app.get('/:jobRequest', (req, res) => {
    requestedJob = req.params.jobRequest;
    res.sendFile(path.join(__dirname+'/buildTimeLineChart.html'));
});


app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
