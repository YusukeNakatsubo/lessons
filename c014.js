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
  const INPUT     = lines[0].split(/\s/).map(Number),
        BOX_COUNT = INPUT[0],
        RADIUS    = INPUT[1],
        DIAMETER  = RADIUS * 2;
  for (let i = 0; i < BOX_COUNT; i += 1) {
    let tmp = lines[i+1].split(/\s/).map(Number);
    if (tmp[0] >= DIAMETER && tmp[1] >= DIAMETER && tmp[2] >= DIAMETER) { console.log(i + 1); }
  }
});