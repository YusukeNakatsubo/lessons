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
  const INPUT = lines[0].split(/\s/).map(Number),
        M     = INPUT[0],
        P     = INPUT[1],
        Q     = INPUT[2];
  const PHASE01 = (M * 1000) - (M * 1000) * (P / 100);
  const PHASE02 = (PHASE01) - (PHASE01) * (Q / 100);
  const RESULT = PHASE02 / 1000;
  console.log(RESULT);
});