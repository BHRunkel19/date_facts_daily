const moment = require('moment');
moment().format();

const chalk = require('chalk');

let fullDate = chalk.blue(moment().format("LLLL"));

let dayOfYear = chalk.magenta(moment().dayOfYear());

let secondsinDay = chalk.green(moment().format("ssss"));

let daylightSavings;
if (moment().isDST() === true){
  daylightSavings = 'is';
} else {
  daylightSavings = 'is not';
}

let leapYear;
if (moment().isLeapYear() === true){
  (leapYear) = "is";
} else {
  (leapYear) = "is not";
};


console.log(`
  It is ${fullDate}.
  It is the ${dayOfYear}th day of the year.
  It is ${secondsinDay} seconds into the day.
  It ${daylightSavings} during Daylight Savings Time.
  It ${leapYear} a leap year.`
)
