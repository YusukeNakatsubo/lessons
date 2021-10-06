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
  const INPUT = lines[0].split(/\+/);
  let result = 0;
  for (let i = 0; i < INPUT.length; i += 1) {
    let slashCount   = (INPUT[i].match(/\//g) || []).length,
        bracketCount = (INPUT[i].match(/</g) || []).length,
        tmpSum       = bracketCount * 10 + slashCount;
    result += tmpSum;
  }
  console.log(result);
});