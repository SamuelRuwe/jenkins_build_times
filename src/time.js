const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp);
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = `${date} ${month} ${year} ${hour}:${
    min}:${sec > 9 ? sec : `0${sec}`}`;
  return time;
};

const durationConverter = (duration) => sec2time(duration / 1000);

const pad = (num, size) => (`000${num}`).slice(size * -1);

const sec2time = (timeInSeconds) => {
  const time = parseFloat(timeInSeconds).toFixed(3);
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
};

const sec2min = (timeInSeconds) => {
  const time = parseFloat(timeInSeconds).toFixed(3);
  const minutes = Math.floor(time / 60);

  return pad(minutes, 2);
};

exports.timeConverter = timeConverter;
exports.durationConverter = durationConverter;
exports.sec2min = sec2min;
