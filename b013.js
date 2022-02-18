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
        [A_TIME, B_TIME, C_TIME] = INPUTS[0].split(/\s/).map(Number),
        COUNT = Number(INPUTS[1]);

  let timeRemaing    = 8 * 60 + 59;
      trainTableArr  = [],
      elapsedTimeArr = [];
  for (let i = 0; i < COUNT; i += 1) { trainTableArr.push(INPUTS[i + 2].split(/\s/).map(Number)); }
  for (let i = 0; i < COUNT; i += 1) {
    let tmpElapsedTime = trainTableArr[i][0] * 60 + trainTableArr[i][1] + B_TIME + C_TIME;
    if (tmpElapsedTime <= timeRemaing) elapsedTimeArr.push(tmpElapsedTime);
  }

  const getMaxValue = (a, b) => { return Math.max(a, b); }
  const getdoubleDigestNumer = (number) => { return ('0' + number).slice(-2); }
  let result = elapsedTimeArr.reduce(getMaxValue) - (A_TIME + B_TIME + C_TIME);
  console.log(`${getdoubleDigestNumer(Math.trunc(result / 60))}:${getdoubleDigestNumer(result % 60)}`);
});