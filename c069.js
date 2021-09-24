// This is a code with a 100% pass rate.
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
  const START = lines[0].split(/\s/).map(Number),
        START_YEAR = Number(START[0]),
        START_MONTH = Number(START[1]),
        START_DAY = Number(START[2]);
  const OPEN = lines[1].split(/\s/).map(Number),
        OPEN_MONTH = Number(OPEN[0]),
        OPEN_DAY = Number(OPEN[1]);
  //
  let OPEN_YEAR;
  if (START_YEAR % 4 === 0) {
    OPEN_YEAR = START_YEAR + 1;
  } else if (START_YEAR % 4 === 2) {
    OPEN_YEAR = START_YEAR + 3;
  } else if (START_YEAR % 4 === 3) {
    OPEN_YEAR = START_YEAR + 2;
  }
  //
  const getRange = (from, to) => {
    let newArray = [];
    for(let i = from; i <= to; i += 1) { newArray.push(i); }
    return newArray;
  }
  //
  let remenantDaysStartMonth = 0;
  let remenantStartYearDays = 0;
  if (START_MONTH % 2 !== 0) { // odd
    remenantDaysStartMonth = 13 - START_DAY;
    let countOdd = getRange(START_MONTH,13).filter(x => x % 2 !== 0).length - 1;
    let countEven = getRange(START_MONTH,13).filter(x => x % 2 === 0).length;
    remenantStartYearDays = countOdd * 13 + countEven * 15 + remenantDaysStartMonth;
  } else { // even
    remenantDaysStartMonth = (15 - START_DAY);
    let countOdd = getRange(START_MONTH,13).filter(x => x % 2 !== 0).length;
    let countEven = getRange(START_MONTH,13).filter(x => x % 2 === 0).length - 1;
    remenantStartYearDays = countOdd * 13 + countEven * 15 +   remenantDaysStartMonth;
  }
  //
  let remenantOpenYearDays = 0;
  if (OPEN_MONTH % 2 !== 0) { // odd
    let countOdd = getRange(1,OPEN_MONTH).filter(x => x % 2 !== 0).length - 1;
    let countEven = getRange(1,OPEN_MONTH).filter(x => x % 2 === 0).length;
    remenantOpenYearDays = countOdd * 13 + countEven * 15 + OPEN_DAY;
  } else { // even
    let countOdd = getRange(1,OPEN_MONTH).filter(x => x % 2 !== 0).length;
    let countEven = getRange(1,OPEN_MONTH).filter(x => x % 2 === 0).length - 1;
    remenantOpenYearDays = countOdd * 13 + countEven * 15 + OPEN_DAY;
  }
  //
  if ((OPEN_YEAR - START_YEAR) === 1) {
    console.log(remenantOpenYearDays + remenantStartYearDays);
  } else {
    console.log((15 * 6 + 13 * 7) * ((OPEN_YEAR - START_YEAR) - 1) + remenantStartYearDays + remenantOpenYearDays);
  }
});