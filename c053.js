// This is a code with a 80% pass rate.
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
  const INPUTS  = lines,
        NUMBERS = INPUTS[1].split(/\s/);
  let multiplyNumber = 1,
      newNumbers, maxNumber;
  if (NUMBERS.includes('x10') === true) {
    multiplyNumber = 'x10';
    newNumbers = NUMBERS.filter(item => item !== multiplyNumber).map(Number);
    multiplyNumber = 10;
  } else {
    newNumbers = NUMBERS.map(Number);
  }
  if (newNumbers.includes(0) === true) {
    maxNumber = Math.max(...newNumbers);
    newNumbers = newNumbers.filter(item => item !== maxNumber);
  }
  let calculateNumbers = newNumbers.reduce((a,b) => { return a + b });
  console.log(calculateNumbers * multiplyNumber);
});