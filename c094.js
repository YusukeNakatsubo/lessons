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
        COUNT  = Number(lines[0]);
  let totalTax = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let income = Number(INPUTS[i + 1]);
    if (income > 100000 && income <= 750000) {
      totalTax += Math.floor((income - 100000) * 0.1);
    } else if (income > 750000 && income <= 1500000) {
      totalTax += (750000 - 100000) * 0.1;
      totalTax += Math.floor((income - 750000) * 0.2);
    } else if (income > 1500000) {
      totalTax += (750000 - 100000) * 0.1;
      totalTax += (1500000 - 750000) * 0.2;
      totalTax += Math.floor((income - 1500000) * 0.4);
    }
  }
  console.log(totalTax);
});