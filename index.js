const moment = require('moment');
moment().format();

const chalk = require('chalk');

let fullDate = chalk.blue(moment().format("LLLL"));

let dayOfYear = chalk.magenta(moment().dayOfYear());

let secondsinDay = chalk.green(moment().format("ssss"));

let daylightSavings = chalk.yellow(moment().isDST());

let leapYear = chalk.red(moment().isLeapYear());


console.log(`
  It is ${fullDate}.
  It is the ${dayOfYear}th day of the year.
  It is ${secondsinDay} seconds into the day.
  It ${daylightSavings} during Daylight Savings Time.
  It ${leapYear} a leap year.`)
