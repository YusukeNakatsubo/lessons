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
        COUNT  = Number(lines[0]);
  let setfloor = [1];
  for (let i = 0; i < COUNT; i += 1) { setfloor.push(Number(INPUTS[i+1])); }
  let counter = 0;
  for (let i = 0; i < setfloor.length - 1; i += 1) {
    counter += Math.abs(setfloor[i+1] - setfloor[i]);
  }
  console.log(counter);
});