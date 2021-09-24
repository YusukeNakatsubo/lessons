// This code has a 50% pass rate. why?
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const THIS = lines[0].split(/\s/).map(Number);
  const THIS_YEAR = Number(THIS[0]);
  const THIS_MONTH = Number(THIS[1]);
  const THIS_DAY = Number(THIS[2]);
  //
  const NEXT = lines[1].split(/\s/).map(Number);
  const NEXT_MONTH = Number(NEXT[0]);
  const NEXT_DAY = Number(NEXT[1]);
  //
  let NEXY_YEAR = 0;
  if (THIS_YEAR % 4 === 2) {
    NEXY_YEAR = THIS_YEAR + 3;
  } else if (THIS_YEAR % 4 === 3) {
    NEXY_YEAR = THIS_YEAR + 2;
  } else if (THIS_YEAR % 4 === 0) {
    NEXY_YEAR = THIS_YEAR + 1;
  } else {
    return;
  }
  const DAYS_PER_YEAR = (15 * 6) + (13 * 7);
  const standardYear = (NEXY_YEAR - (THIS_YEAR + 1)) * DAYS_PER_YEAR;
  //
  let remnantThisMonth = 13 - THIS_MONTH;
  let remnantThisMonthDays = 0;
  if (remnantThisMonth % 2 === 0) {
    let tmp = remnantThisMonth / 2
    remnantThisMonthDays = (15 * tmp) + (13 * tmp);
  } else {
    let tmp = Math.floor(remnantThisMonth / 2);
    remnantThisMonthDays = (15 * tmp) + (13 * tmp) + 13;
  }
  //
  let remnantNextMonth = NEXT_MONTH;
  let remnantNextMonthDays = 0;
  let remnantNextMonthTmp = Math.floor(remnantNextMonth / 2);
  remnantNextMonthDays = (15 * remnantNextMonthTmp) + (13 * remnantNextMonthTmp);
  const standardMonth = remnantThisMonthDays + remnantNextMonthDays;
  //
  let remnantThisDayDays = 0;
  if (THIS_MONTH % 2 === 0) {
    let tmp = 15 - THIS_DAY;
    remnantThisDayDays = tmp;
  } else {
    let tmp = 13 - THIS_DAY;
    remnantThisDayDays = tmp;
  }
  let remnantNextDayDays = NEXT_DAY;
  const standardDay = remnantThisDayDays + remnantNextDayDays;
  //
  console.log(standardYear+standardMonth+standardDay);
});