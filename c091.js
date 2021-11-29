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
        [STANDARD_VALUE, COUNT] = INPUTS[0].split(/\s/).map(Number);
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i + 1]);
    let tmpQuotient = Math.floor(tmp / STANDARD_VALUE);
    if (tmpQuotient === 0) {
      console.log(STANDARD_VALUE);
    } else {
      let scoreA = Math.round(tmp / STANDARD_VALUE);
      let scoreB = Math.floor(tmp / STANDARD_VALUE);
      scoreA > scoreB ? console.log((tmpQuotient + 1) * STANDARD_VALUE) : console.log(tmpQuotient * STANDARD_VALUE);
    }
  }
});