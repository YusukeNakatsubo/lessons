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
        [O_Y, S, D] = INPUTS[0].split(/\s/).map(Number);
        [X, Y, A] = INPUTS[1].split(/\s/).map(Number),
        G = 9.8;
  const R = D * (Math.PI / 180),
        HIGH_HEIGHT = Y + A * 0.5,
        LOW_HEIGHT = Y - A * 0.5;

  const RESULT = O_Y + (X * Math.tan(R)) - (G * Math.pow(X, 2)) / (2 * Math.pow(S, 2) * Math.pow(Math.cos(R), 2));
  let flag = -1;
  if (RESULT <= HIGH_HEIGHT && RESULT >= Y) flag = RESULT - Y;
  else if (RESULT < Y && RESULT >= LOW_HEIGHT) flag = Y - RESULT;

  flag >= 0 ? console.log(`Hit ${Math.abs(Math.round(flag * 10) / 10)}`) : console.log('Miss');
});