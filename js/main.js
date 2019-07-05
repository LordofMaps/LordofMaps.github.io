const weddingDate = new Date('2019-11-16T20:00:00Z').getTime();
const createCountdownText = () => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

const setCountdownText = (elm) => {
  const countdownText = createCountdownText();
  elm.text(countdownText)
};

$(document).ready(() => {
  const countdownElm = $('#countdown');
  setCountdownText(countdownElm);
  setInterval(() => {
    setCountdownText(countdownElm);
  }, 1000)
})