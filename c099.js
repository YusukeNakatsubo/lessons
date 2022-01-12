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
        [COUNT, LENGTH] = INPUTS[0].split(/\s/).map(Number);
  let totalLength = 0;
  for (let i = 0; i < COUNT - 1; i += 1) {
    let difference = Number(INPUTS[i + 1]);
    if (totalLength === 0) totalLength = LENGTH;
    totalLength += LENGTH - difference;
  }
  console.log(LENGTH * totalLength);
});