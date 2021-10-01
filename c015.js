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
  const RECIPT_COUNT = Number(lines[0]);
  let sumPoints = 0;
  for (let i = 0; i < RECIPT_COUNT; i += 1) {
    let tmp = lines[i+1].split(/\s/).map(Number);
    if (String(tmp[0]).includes(3) === true) {
      sumPoints += Math.floor(tmp[1] * 0.03);
    } else if (String(tmp[0]).includes(5) === true) {
      sumPoints += Math.floor(tmp[1] * 0.05);
    } else {
      sumPoints += Math.floor(tmp[1] * 0.01);
    }
  }
  console.log(sumPoints);
});