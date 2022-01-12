// This is a code with a 90% pass rate.
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
  const INPUTS = lines,
        COUNT  = Number(lines[0]);
  let result = 'OK';
  for (let i = 0; i < COUNT - 1; i += 1) {
    let tmpA = INPUTS[i + 1].split(/\s/).map(Number),
        tmpB = INPUTS[i + 2].split(/\s/).map(Number);
    let tmpHolidayA = [],
        tmpHolidayB = [];
    for (let j = tmpA[0]; j < tmpA[1]; j += 1) { tmpHolidayA.push(j); }
    for (let j = tmpB[0]; j < tmpB[1]; j += 1) { tmpHolidayB.push(j); }
    const getIsDuplicate = (arr1, arr2) => {
      return [...arr1, ...arr2].filter(item => arr1.includes(item) && arr2.includes(item)).length > 0
    }
    if (getIsDuplicate(tmpHolidayA, tmpHolidayB) === false) {
      result = 'NG';
      break;
    }
  }
  console.log(result);
});