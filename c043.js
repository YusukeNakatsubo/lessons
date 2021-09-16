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
  const INPUTS = lines;
  const INPUT = INPUTS[1].split(/\s/).map(Number);
  //
  const SORT_RESULT = INPUT.sort((a,b) => {
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
  });
  //
  const TMP = {};
  let maxValue = 0;
  let outputValues = [];
  SORT_RESULT.forEach((value) => {
    TMP[value] = TMP[value] ? TMP[value] + 1 : 1;
    if (TMP[value] > maxValue) {
      maxValue = TMP[value];
      outputValues = [value];
      return;
    }
    if (TMP[value] === maxValue) { outputValues.push(value) }
  })
  console.log(outputValues.join(' '));
});