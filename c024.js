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
  let a = 0,
      b = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/);
    if (tmp[0] === 'SET' && tmp[1] === '1') {
      a = Number(tmp[2]);
    } else if (tmp[0] === 'SET' && tmp[1] === '2') {
      b = Number(tmp[2]);
    } else if (tmp[0] === 'ADD') {
      let tmpA = a + Number(tmp[1]);
      b = tmpA;
    } else if (tmp[0] === 'SUB') {
      let tmpA = a - Number(tmp[1]);
      b = tmpA;
    }
  }
  console.log(a + ' ' + b);
});