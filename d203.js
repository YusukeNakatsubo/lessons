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
        STRINGS = INPUTS[0].split('').map(String);
        STRING  = String(INPUTS[1]),
        NUMBER  = Number(INPUTS[2]);
  if (STRINGS[NUMBER - 1] === STRING) console.log('Yes');
  else console.log('No');
});