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
  const INPUT = lines[0].split(/\s/).map(Number),
        x     = INPUT[0],
        y     = INPUT[1],
        r_1   = INPUT[2],
        r_2   = INPUT[3],
        COUNT = Number(lines[1]);
  //
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = lines[i+2].split(/\s/).map(Number);
    let tmpPosition = Math.pow((x - tmp[0]),2) + Math.pow((y - tmp[1]),2);
    if (Math.pow(r_1,2) <= tmpPosition && tmpPosition <= Math.pow(r_2,2)) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
});