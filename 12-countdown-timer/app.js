const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveawayInfo = document.querySelector('.giveaway');
const container = document.querySelector('.deadline');
const deadline = document.querySelectorAll('.deadline-format h4');

let date = new Date(2021, 3, 22, 9, 6, 0);

const year = date.getFullYear();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

const month = months[date.getMonth()];
const weekday = weekdays[date.getDay()];

giveawayInfo.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year}, ${format(hour)}:${format(minute)}am`;

function format(item) {
  if (item < 10) {
    return `0${item}`;
  }
  
  return item;
}

const futureDate = date.getTime();

function getRemainingTime() {
  const actualDate = new Date().getTime();
  const timeLeft = futureDate - actualDate;
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / oneHour);
  let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  let seconds = Math.floor((timeLeft % oneMinute) / 1000);
  
  const values = [days, hours, minutes, seconds];
  
  deadline.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
  
  if (timeLeft < 0) {
    clearInterval(countdown);
    container.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
