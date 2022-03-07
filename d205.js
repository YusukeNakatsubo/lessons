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
  const INPUTS = lines,
        A_ARR = INPUTS[0].split(/\s/).map(Number),
        B_ARR = INPUTS[1].split(/\s/).map(Number);
  A_ARR[1] / A_ARR[0] > B_ARR[1] / B_ARR[0] ? console.log(1) : console.log(2);
});