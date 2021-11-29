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
  let tmpNumbers = lines[0].split('-');
  let numbers = [];
  for (let i = 0; i < tmpNumbers.length; i += 1) {
    numbers = numbers.concat(tmpNumbers[i].split(''));
  }
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] === '0' ? result += 12 * 2 : result += (Number(numbers[i]) + 2) * 2;
  }
  console.log(result);
});