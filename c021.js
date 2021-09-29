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
  const INPUT      = lines[0].split(/\s/).map(Number),
        POSITION_X = INPUT[0],
        POSITION_Y = INPUT[1],
        RADIUS01   = INPUT[2],
        RADIUS02   = INPUT[3],
        COUNT      = Number(lines[1]);
  //
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = lines[i+2].split(/\s/).map(Number);
    let tmpPosition = Math.pow((POSITION_X - tmp[0]),2) + Math.pow((POSITION_Y - tmp[1]),2);
    if (Math.pow(RADIUS01,2) <= tmpPosition && tmpPosition <= Math.pow(RADIUS02,2)) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
});