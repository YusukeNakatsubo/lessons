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
        DAYS   = Number(INPUTS[0]);
  let flowerBed = [];
  for (let i = 0; i < 60; i += 1) { flowerBed.push(0); }
  for (let i = 0; i < DAYS; i += 1) {
    let [bloomDay, startDay] = INPUTS[i + 1].split(/\s/).map(Number);
    flowerBed[(startDay + bloomDay) - 1] += 1;
  }
  let maxValue = flowerBed.reduce((a, b) => { return Math.max(a, b); })
  console.log(flowerBed.indexOf(maxValue) + 1);
});