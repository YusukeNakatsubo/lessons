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
  const [START_PRICE, BUDGET_A, BUDGET_B] = lines[0].split(/\s/).map(Number);
  let tmpPrice = START_PRICE;
  while (true) {
    if (BUDGET_A >= tmpPrice + 10) {
      tmpPrice += 10;
    } else {
      console.log(`B ${tmpPrice}`);
      break;
    }
    if (BUDGET_B >= tmpPrice + 1000) {
      tmpPrice += 1000;
    } else {
      console.log(`A ${tmpPrice}`);
      break;
    }
  }
});
