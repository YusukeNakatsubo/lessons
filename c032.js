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
  let foods  = 0,
      books  = 0,
      wears  = 0,
      others = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/).map(Number);
    if (tmp[0] === 0) {
      foods += tmp[1];
    } else if (tmp[0] === 1) {
      books += tmp[1];
    } else if (tmp[0] === 2) {
      wears += tmp[1];
    } else {
      others += tmp[1];
    }
  }
  console.log(Math.floor(foods / 100) * 5 + Math.floor(books / 100) * 3 + Math.floor(wears / 100) * 2 + Math.floor(others / 100) * 1);
});