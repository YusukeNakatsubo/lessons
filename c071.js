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
  const [MAX_A, MAX_B] = lines[0].split(/\s/).map(Number);
  let result = 0;
  for (let a = 1; a < MAX_A; a += 1) {
    for (let b = 1; b < MAX_B; b += 1) {
      let tmpC = Math.pow(a, 2) + Math.pow(b, 2);
      let c = Math.sqrt(tmpC);
      if (Number.isInteger(c) === true) { result += 1; }
    }
  }
  console.log(result);
});