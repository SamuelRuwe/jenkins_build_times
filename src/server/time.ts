const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const unixTimestampToDate = (unixTimestamp: number) => {
  const a = new Date(unixTimestamp);
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  return `${date} ${month} ${year} ${hour}:${
    min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`;
};

const millsecondsToSeconds = (milliseconds: number) => milliseconds / 1000;
const secondsToHours = (seconds: number) => Math.floor(seconds / 60 / 60);
const secondsToMinutes = (seconds: number) => Math.floor(seconds / 60);

const pad = (num: number, size: number) => (`000${num}`).slice(size * -1);

const durationToMinutes = (duration: number) => {
  const seconds = millsecondsToSeconds(duration);
  return secondsToMinutes(seconds);
};

const durationToHours = (duration: number) => {
  const timeInSeconds: number = millsecondsToSeconds(duration);
  const hours = secondsToHours(timeInSeconds);
  const minutes = secondsToMinutes(timeInSeconds) % 60;
  const seconds = Math.floor(timeInSeconds - minutes * 60);

  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
};

export {
  unixTimestampToDate, durationToHours, secondsToMinutes, millsecondsToSeconds, durationToMinutes
};
