const today = new Date();
const day = today.getDay();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
let hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(`Today Is ${dayList[day]}`);

let prepand = hour >= 12 ? "pm" : "am";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "pm") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "noon";
  } else {
    hour = 12;
    prepand = "pm";
  }
}
if (hour === 0 && prepand === "am") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "midnight";
  } else {
    hour = 12;
    prepand = "am";
  }
}
console.log(`Current Time is ${hour}${prepand} : ${minutes} : ${seconds}`);
