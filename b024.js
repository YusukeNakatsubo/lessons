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
  const R = Number(lines[0]);
  let result = 0;
  for (let i = 0; i < Math.ceil(R); i += 1) {
    result += Math.ceil(Math.pow((Math.pow(R, 2) - Math.pow(i, 2)), 0.5))
  }
  console.log(result * 4)
});