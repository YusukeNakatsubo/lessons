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
        [COUNT, TYPE] = INPUTS[0].split(/\s/).map(Number);
  let cardType = [],
      counter  = 0;
  for (let i = 0; i < COUNT; i += 1) {
    if (cardType.length === TYPE) { break; }
    let tmp = Number(INPUTS[i + 1]);
    if (cardType.includes(tmp) === false) { cardType.push(tmp); }
    counter += 1;
  }
  cardType.length === TYPE ? console.log(counter) : console.log('unlucky');
});