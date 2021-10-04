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
  const INPUTS = lines;
  const [HEIGHT, WIDTH] = INPUTS[0].split(/\s/).map(Number);
  for (let i = 0; i < HEIGHT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/).map(Number);
    let tmpResult = [];
    for (let j = 0; j < WIDTH; j += 1) {
      if (tmp[j] >= 128) {
        tmpResult.push(1);
      } else {
        tmpResult.push(0);
      }
    }
    console.log(tmpResult.join(' '));
  }
});