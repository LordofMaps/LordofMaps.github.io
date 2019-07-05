const weddingDate = new Date('2019-11-16T20:00:00Z').getTime();
const calcDaysRemaining = () => {
  const now = new Date().getTime();
  const distance = Math.max(weddingDate - now, 0);
  const days = Math.floor(distance / 86400000);
  return `${days} ${days === 1 ? 'Day' : 'Days'}`;
};
const calcHoursRemaining = () => {
  const now = new Date().getTime();
  const distance = Math.max(weddingDate - now, 0);
  const hours = Math.floor((distance % 86400000) / 3600000);
  return `${hours} ${hours === 1 ? 'Hour' : 'Hours'}`;
};
const calcMinutesRemaining = () => {
  const now = new Date().getTime();
  const distance = Math.max(weddingDate - now, 0);
  const minutes = Math.floor((distance % 3600000) / 60000);
  return `${minutes} ${minutes === 1 ? 'Minute' : 'Minutes'}`;
};
const calcSecondsRemaining = () => {
  const now = new Date().getTime();
  const distance = Math.max(weddingDate - now, 0);
  const seconds = Math.floor((distance % 60000) / 1000);
  return `${seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`;
};

const setDaysText = (elm) => {
  const countdownText = calcDaysRemaining();
  elm.text(countdownText)
};
const setHourText = (elm) => {
  const countdownText = calcHoursRemaining();
  elm.text(countdownText)
};
const setMinutesText = (elm) => {
  const countdownText = calcMinutesRemaining();
  elm.text(countdownText)
};
const setSecondsText = (elm) => {
  const countdownText = calcSecondsRemaining();
  elm.text(countdownText)
};

$(document).ready(() => {
  const daysElm = $('#days');
  const hoursElm = $('#hours');
  const minutesElm = $('#minutes');
  const secondsElm = $('#seconds');
  setDaysText(daysElm);
  setHourText(hoursElm);
  setMinutesText(minutesElm);
  setSecondsText(secondsElm);
  setInterval(() => {
    setDaysText(daysElm);
    setHourText(hoursElm);
    setMinutesText(minutesElm);
    setSecondsText(secondsElm);
  }, 1000)
})