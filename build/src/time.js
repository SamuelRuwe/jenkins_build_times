"use strict";
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var timeConverter = function (UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + (sec > 9 ? sec : "0" + sec);
    return time;
};
var durationConverter = function (duration) { return sec2time(duration / 1000); };
var pad = function (num, size) { return ("000" + num).slice(size * -1); };
var sec2time = function (timeInSeconds) {
    var time = parseFloat(timeInSeconds).toFixed(3);
    var hours = Math.floor(time / 60 / 60);
    var minutes = Math.floor(time / 60) % 60;
    var seconds = Math.floor(time - minutes * 60);
    return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
};
var sec2min = function (timeInSeconds) {
    var time = parseFloat(timeInSeconds).toFixed(3);
    var minutes = Math.floor(time / 60);
    return pad(minutes, 2);
};
exports.timeConverter = timeConverter;
exports.durationConverter = durationConverter;
exports.sec2min = sec2min;
