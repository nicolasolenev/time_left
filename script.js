import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import formatDuration from 'date-fns/formatDuration';

const UI = {
  FORM: document.getElementById('form'),
  ENTERED_DATE: document.getElementById('entered_date'),
  ANSWER: document.getElementById('answer'),
}

UI.FORM.addEventListener('submit', function () {
  const formatDate = UI.ENTERED_DATE.value.split('-').map(item => +item);
  formatDate[1] = +formatDate[1] - 1;

  const seconds = formatDistanceToNowStrict(new Date(...formatDate), { unit: 'second' }).split(' ')[0];
  const years = Math.floor(seconds / (60 * 60 * 24 * 365));
  const days = Math.floor((seconds - years * 365 * 24 * 60 * 60) / (60 * 60 * 24));
  const hours = Math.ceil((seconds - years * 365 * 24 * 60 * 60 - days * 60 * 60 * 24) / (60 * 60));

  UI.ANSWER.innerText = 'After ' + formatDuration({
    years: years,
    days: days,
    hours: hours,
  });
});