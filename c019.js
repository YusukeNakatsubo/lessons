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
        COUNT  = INPUTS.length - 1;
  //
  const numberDivision = (number) => {
    let result = [];
    for (let i = 0; i < number; i += 1) {
      if (number % i === 0) {
         result.push(i);
      }
    }
    return result;
  }
  //
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i+1]);
    if (numberDivision(tmp).reduce((a,b) => a + b) === tmp) {
      console.log('perfect');
    } else if (Math.abs((numberDivision(tmp).reduce((a,b) => a + b)) - tmp) === 1) {
      console.log('nearly');
    } else {
      console.log('neither');
    }
  }
});