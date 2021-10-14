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
        [POINTS, LIMIT] = INPUTS[0].split(/\s/).map(Number);
  const RANGES = [];
  for (let i = 1; i < lines.length; i += 1) {
    RANGES.push(lines[i].split(/\s/).map(Number));
  }
  let result = 'NO';
  for (let i = 0; i < RANGES.length - 1; i += 1) {
    let tmpTime  = RANGES[i+1][0] - RANGES[i][0];
    let tmpSpeed = RANGES[i+1][1] - RANGES[i][1];
    if (tmpSpeed / tmpTime > LIMIT) {
      result = 'YES';
      break;
    }
  }
  console.log(result);
});