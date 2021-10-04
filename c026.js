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
  const [COUNT, STANDARD_VALUE, ALLOWABLE_EROOR] = lines[0].split(/\s/).map(Number);
  //
  let carrotsWeight = 0;
  let carrotsIndex = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let [tmpWeight, tmpSuger] = INPUTS[i+1].split(/\s/).map(Number);
    if (STANDARD_VALUE - ALLOWABLE_EROOR <= tmpSuger && tmpSuger <= STANDARD_VALUE + ALLOWABLE_EROOR) {
      if (carrotsWeight < tmpWeight) {
        carrotsWeight = tmpWeight;
        carrotsIndex = i + 1;
      }
    }
  }
  //
  if (carrotsWeight > 0) {
    console.log(carrotsIndex);
  } else {
    console.log('not found');
  }
});