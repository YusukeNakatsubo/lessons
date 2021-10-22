// This is a code with a 90% pass rate. Why?
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
        [ORDER_COUNT, MEMBER_COUNT] = INPUTS[0].split(/\s/).map(Number);
  let orders = [];
  for (let i = 0; i < ORDER_COUNT; i += 1) {
    orders.push(INPUTS[i + 1]);
  }
  for (let i = 0; i < MEMBER_COUNT; i += 1) {
    let tmp = INPUTS[i + ORDER_COUNT + 1].split(/\s/).map(Number);
    let totalCalorie = 0;
    for (let j = 0; j < ORDER_COUNT; j += 1) {
      let gramPerCalorie = orders[j] / 100;
      let calorie = Math.floor(tmp[j] * gramPerCalorie);
      totalCalorie += calorie;
    }
    console.log(totalCalorie);
  }
});