"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var path_1 = __importDefault(require("path"));
var fetchJenkins_1 = require("./fetchJenkins");
var jenkinsJobs_1 = require("./jenkinsJobs");
app.use(express.static('./'));
var requestedJob = 'merge-master';
app.get('favicon.ico', function (req, res) { return res.status(204); });
app.get('/data', function (req, res) {
    var variableBoii = jenkinsJobs_1.jobLinks.MERGE_MASTER.link;
    if (requestedJob === jenkinsJobs_1.jobLinks.MERGE_MASTER.request) {
        variableBoii = jenkinsJobs_1.jobLinks.MERGE_MASTER.link;
    }
    else if (requestedJob === jenkinsJobs_1.jobLinks.MERGE_SEQUENCE_SEARCH.request) {
        variableBoii = jenkinsJobs_1.jobLinks.MERGE_SEQUENCE_SEARCH.link;
    }
    else if (requestedJob === jenkinsJobs_1.jobLinks.STN_PLANARIA_BUILD.request) {
        variableBoii = jenkinsJobs_1.jobLinks.STN_PLANARIA_BUILD.link;
    }
    fetchJenkins_1.fetchData(variableBoii).then(function (data) { return res.send(data); });
});
app.get('/:jobRequest', function (req, res) {
    requestedJob = req.params.jobRequest;
    res.sendFile(path_1.default.join(__dirname + "/buildTimeLineChart.html"));
});
app.listen(process.env.PORT || 3000, function () { return console.log("Listening on port " + (process.env.PORT || 3000) + "!"); });
