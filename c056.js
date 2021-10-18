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
  const INPUTS         = lines,
        [COUNT, POINT] = INPUTS[0].split(/\s/).map(Number);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) {
    let [tmpPoint, tmpAbsenceDays] = INPUTS[i+1].split(/\s/).map(Number);
    tmpPoint -= tmpAbsenceDays * 5;
    if (tmpPoint >= POINT || POINT === 0) { result.push([i+1]); }
  }
  console.log(result.join('\n'));
});