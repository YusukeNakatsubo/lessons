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
        [CHARGE, COUNT] = INPUTS[0].split(/\s/).map(Number);
  let paicaCharge = CHARGE,
      paicaPoint  = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = Number(INPUTS[i + 1]);
    if (paicaPoint >= tmp) {
      paicaPoint -= tmp;
    } else {
      paicaCharge -= tmp;
      paicaPoint += tmp * 0.1;
    }
    console.log(`${paicaCharge} ${paicaPoint}`);
  }
});