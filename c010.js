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
        A     = INPUT[0],
        B     = INPUT[1],
        R     = INPUT[2],
        COUNT = Number(lines[1]);
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = lines[i+2].split(/\s/).map(Number);
    if (Math.pow((tmp[0] - A), 2) + Math.pow((tmp[1] - B), 2) >= Math.pow(R, 2)) {
      console.log('silent');
    } else {
      console.log('noisy');
    }
  }
});