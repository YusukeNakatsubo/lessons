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
        COUNT  = Number(INPUTS[0]);
  let result  = 0,
      counter = 10;
  for (let i = 0; i < COUNT; i += 1) {
    counter += 1;
    if (INPUTS[i + 1] === 'melon' && counter > 10) {
      result += 1;
      counter = 0;
    }
  }
  console.log(result);
});