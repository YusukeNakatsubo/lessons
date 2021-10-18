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
  const INPUTS        = lines,
        COUNT         = Number(INPUTS[0]),
        VALIDATE_TEXT = String(INPUTS[1]);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) {
    if (INPUTS[i+2].includes(VALIDATE_TEXT) === true) { result.push(INPUTS[i+2]); }
  }
  result.length !== 0 ? console.log(result.join('\n')) : console.log('None');
});