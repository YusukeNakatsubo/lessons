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
  const INPUTS                   = lines,
        [HEIGHT, WIDTH]          = INPUTS[0].split(/\s/).map(Number);
        [X_POSITION, Y_POSITION] = INPUTS[1].split(/\s/).map(Number);
  console.log((WIDTH * Math.abs(X_POSITION)) + (HEIGHT * Math.abs(Y_POSITION)) - (Math.abs(X_POSITION) * Math.abs(Y_POSITION)));

});