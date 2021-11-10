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
        [COUNT, BELOW, ABOVE] = INPUTS[0].split(/\s/).map(Number);
  let stock  = 0,
      wallet = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i + 1]);
    let endDay = COUNT - 1;
    if (i === endDay) { wallet += tmp * stock; break; }
    if (tmp <= BELOW) {
      wallet -= tmp;
      stock += 1;
    } else if (tmp >= ABOVE) {
      wallet += tmp * stock;
      stock = 0;
    }
  }
  console.log(wallet);
});
