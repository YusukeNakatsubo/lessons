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
  const INPUT_NUMBER = String(lines[0]);
  let tmpNumberArray = INPUT_NUMBER.split(''),
      tmpReverseNumberArray = tmpNumberArray.slice().reverse();
  let tmpNumber = String(tmpNumberArray.join('')),
      tmpReverseNumber = String(tmpReverseNumberArray.join(''));
  while (tmpNumber !== tmpReverseNumber) {
    tmpReverseNumber = tmpNumber.split('').reverse().join('');
    tmpNumber = Number(tmpNumber) + Number(tmpReverseNumber);
    tmpNumber = String(tmpNumber);
    tmpReverseNumber = tmpNumber.split('').reverse().join('');
    if (tmpNumber === tmpReverseNumber) { break; }
  }
  console.log(tmpNumber);
});