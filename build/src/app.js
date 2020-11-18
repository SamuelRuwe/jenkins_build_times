"use strict";
var express = require('express');
var app = express();
var path = require('path');
var fetchData = require('./fetchJenkins').fetchData;
var jobLinks = require('./jenkinsJobs').jobLinks;
app.use(express.static('./'));
var requestedJob = 'merge-master';
app.get('favicon.ico', function (req, res) { return res.status(204); });
app.get('/data', function (req, res) {
    var variableBoii = jobLinks.MERGE_MASTER.link;
    if (requestedJob === jobLinks.MERGE_MASTER.request) {
        variableBoii = jobLinks.MERGE_MASTER.link;
    }
    else if (requestedJob === jobLinks.MERGE_SEQUENCE_SEARCH.request) {
        variableBoii = jobLinks.MERGE_SEQUENCE_SEARCH.link;
    }
    else if (requestedJob === jobLinks.STN_PLANARIA_BUILD.request) {
        variableBoii = jobLinks.STN_PLANARIA_BUILD.link;
    }
    fetchData(variableBoii).then(function (data) { return res.send(data); });
});
app.get('/:jobRequest', function (req, res) {
    requestedJob = req.params.jobRequest;
    res.sendFile(path.join(__dirname + "/buildTimeLineChart.html"));
});
app.listen(process.env.PORT || 3000, function () { return console.log("Listening on port " + (process.env.PORT || 3000) + "!"); });
