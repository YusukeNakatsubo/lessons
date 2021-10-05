// This is a code with a 9% pass rate. Why?
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
  const INPUT        = lines[0].split(/\s/),
        ADDITION     = INPUT.indexOf('+'),
        SUBTRACTION  = INPUT.indexOf('-');
  if (INPUT[0] === 'x') {
    if (ADDITION !== -1) {
      console.log(Number(INPUT[4]) - Number(INPUT[2]));
    } else if (SUBTRACTION[0] !== -1) {
      console.log(Number(INPUT[4]) + Number(INPUT[2]));
    }
  } else if (INPUT[2] === 'x') {
    if (ADDITION !== -1) {
      console.log(Number(INPUT[4]) - Number(INPUT[1]));
    } else if (SUBTRACTION[0] !== -1) {
      console.log(Number(INPUT[0]) - Number(INPUT[4]));
    }
  } else if (INPUT[4] === 'x') {
    if (ADDITION !== -1) {
      console.log(Number(INPUT[0]) + Number(INPUT[2]));
    } else if (SUBTRACTION[0] !== -1) {
      console.log(Number(INPUT[0]) - Number(INPUT[2]));
    }
  }
});