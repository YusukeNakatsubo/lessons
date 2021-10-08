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
  let [price, discount] = lines[0].split(/\s/).map(Number);
  let tmpPrice = price;
  while (price > 1) {
    price = Math.floor(price - (price * (discount / 100)));
    tmpPrice += price;
  }
  console.log(tmpPrice);
});