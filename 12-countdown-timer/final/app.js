const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// The Date() constructor and its methods return 24hr time format
// (Day Month Date Year HH:MM:SS)
// ex: "Monday July 1 2020 00:25:00"
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;

// Date modifiers to setup the constant futureDate and time.
// Set futureDate up here, don't modify the const directly. futureDate remains constant after declaration.
// unless these values are changed prior to next execution.
let tempDay = tempDate.getDate() + 10;
let tempHours= 11;
let tempMinutes= 30;
let tempSeconds= 0;

const futureDate = new Date(tempYear, tempMonth, tempDay, tempHours, tempMinutes, tempSeconds);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Add some variables to fix/change presentation of the date string in giveaway.textContent
var displayHours = hours;
var displayMinutes = minutes;
var meridiem = "AM";

// Add leading zero to output of giveaway.textContent if minutes is < 10
displayMinutes  = (displayMinutes < 10) ? "0" + displayMinutes : displayMinutes;

// Convert 24hr format (default) to 12 hour format with AM/PM, 00:00:00 displays as 12:00:00 AM
meridiem = (displayHours >= 12) ? "PM" : "AM";
displayHours = (hours > 12) ? displayHours -12 : hours;
displayHours = (hours == 0) ? 12 : displayHours;

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${displayHours}:${displayMinutes} ${meridiem}`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
