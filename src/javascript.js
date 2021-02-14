let now = new Date();

let hourNow = document.querySelector("#hour");
let hour = now.getHours();
let minutes = now.getMinutes();


function currentHour(){
  hourNow.innerHTML = `${hour}:${minutes}`
  let meridiemNow = document.querySelector("#meridiem");
  if (hour.value <= 12) { meridiemNow.innerHTML = `AM`;} 
  else {meridiemNow.innerHTML = 'PM';}
  
};

let days = [
"Sunday",
"Monday",
"Thursday",
"Wednesday",
"Tuesday",
"Friday",
"Saturday"];
let day = days[now.getDay()];
let dayNow = document.querySelector(`#day`);
dayNow.innerHTML = `${day}`;

function cityNow(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
let currentCity = document.querySelector("#city-answer");
currentCity.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");


currentHour();  
form.addEventListener("submit", cityNow);