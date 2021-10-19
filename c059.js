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
  let result = [0, 0, 0, 0];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+1].split('').map(Number);
    for (let j = 0; j < tmp.length; j += 1) {
      if (tmp[j] === 1) { result[j] += 1; }
    }
  }
  for (let i = 0; i < result.length; i += 1) {
    result[i] % 2 === 1 ? result[i] = 1 : result[i] = 0;
  }
  console.log(result.join(''));
});