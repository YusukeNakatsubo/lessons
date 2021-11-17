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
        [COUNT, UNIT] = INPUTS[0].split(/\s/).map(Number);
  let PERIODS = [];
  for (let i = 0; i < COUNT; i += 1) { PERIODS.push(Number(INPUTS[i + 1])); }
  let maxPeriod = PERIODS.reduce((a, b) => { return Math.max(a, b); });
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i + 1]);
    let maxValue     = '.'.repeat(maxPeriod / UNIT),
        thisValue    = '*'.repeat(tmp / UNIT),
        replaceValue = '.'.repeat(tmp / UNIT);
    let result = maxValue.replace(replaceValue, thisValue);
    console.log(`${i + 1}:${result}`);
  }
});