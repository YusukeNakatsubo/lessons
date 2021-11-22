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
        INPUT_NUMBER = INPUTS[0].split(/\s/),
        INPUT_STRING = INPUTS[1].split('');
  const ALPABET_ARRAY = [...Array(26)].map((_, b) => (10 + b).toString(36));
  let keyDurableArray = [];
  for (let i = 0; i < 26; i += 1) { keyDurableArray.push([ALPABET_ARRAY[i], INPUT_NUMBER[i]]); }
  let result = [];
  for (let i = 0; i < INPUT_STRING.length; i += 1) {
    let target = INPUT_STRING[i][0];
    let tmp = keyDurableArray.filter(e => e[0] === target);
    if (tmp[0][1] > 0) {
      result.push(tmp[0][0]);
      tmp[0][1] -= 1;
    }
  }
  console.log(result.join(''));
});