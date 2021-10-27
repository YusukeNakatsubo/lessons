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
        [COUNT, NUMBER] = INPUTS[0].split(/\s/).map(Number);
  const CONVERT_NUMBER = NUMBER.toString(2).split('').reverse();
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i + 1]);
    console.log(CONVERT_NUMBER[tmp - 1]);
  }
});