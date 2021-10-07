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
  let scores = [],
      result = []
  for (let i = 0; i < INPUTS.length - 1; i += 1) {
    let tmpI = INPUTS[i+1].split(/\s/).map(Number);
    scores.push(tmpI);
    let tmpJ = [];
    for (let j = 0; j < COUNT; j += 1) {
      tmpJ.push('-');
    }
    result.push(tmpJ);
  }
  //
  for (let i = 0; i < INPUTS.length - 1; i += 1) {
    let tmpWin  = scores[i][0] - 1,
        tmpLose = scores[i][1] - 1;
    result[tmpWin][tmpLose] = 'W';
    result[tmpLose][tmpWin] = 'L';
  }
  //
  for (let i = 0; i < COUNT; i += 1) {
    console.log(result[i].join(' '));
  }
});