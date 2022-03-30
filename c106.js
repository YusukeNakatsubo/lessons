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
        COUNT  = Number(INPUTS[0]),
        SCORE_ARR = INPUTS[1].split(/\s/).map(Number);

  let resultArr = Array(COUNT).fill(0);

  for (let i = 0; i < COUNT; i += 1) {
    let counter = 1;
    let compareNum = SCORE_ARR[i];
    for (let j = 0; j < COUNT; j += 1) {
      if (compareNum < SCORE_ARR[j]) counter += 1;
    }
    resultArr[i] = counter;
  }

  for (let i = 0; i < COUNT; i += 1) {
    if (resultArr[i] === 1) console.log('G');
    else if (resultArr[i] === 2) console.log('S');
    else if (resultArr[i] === 3) console.log('B');
    else console.log('N');
  }
});