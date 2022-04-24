let date = new Date("May 1, 2022, 23:59:59");

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = date - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours  = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

  document.querySelector(".days").innerHTML = days;
  hours < 10 ? document.querySelector(".hours").innerHTML = `0${hours}` : document.querySelector(".hours").innerHTML = hours;
  minutes < 10 ? document.querySelector(".minutes").innerHTML = `0${minutes}` : document.querySelector(".minutes").innerHTML = minutes;
  seconds < 10 ? document.querySelector(".seconds").innerHTML = `0${seconds}` : document.querySelector(".seconds").innerHTML = seconds;

}, 1000);
