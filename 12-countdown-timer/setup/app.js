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

// const countdownDate = new Date(2023,11,10,17,30,0);
// console.log(countdownDate);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const countdownDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);


const year = countdownDate.getFullYear();
const hours = countdownDate.getHours();
const minutes = countdownDate.getMinutes();

const seconds = countdownDate.getSeconds();

let month = countdownDate.getMonth();
month = months[month];

const date = countdownDate.getDate();

const weekday = weekdays[countdownDate.getDay()];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');


if(hours>=12)
{
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds}pm`;
}
else
{
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds}am`;
}



function updateCountdown()
{
  const now=new Date().getTime();
  const timeDifference = countdownDate-now;

  //Calculate hours,days,minutes,seconds
  const days = Math.floor(timeDifference/(1000*60*60*24));
  const hours = Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((timeDifference%(1000*60*60))/(1000*60));
  const secs = Math.floor((timeDifference%(1000*60))/(1000));

  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = mins;
  document.querySelector('.seconds').textContent = secs;

  if(timeDifference<0)
  {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }

}

let countdown = setInterval(updateCountdown,1000);
updateCountdown();
