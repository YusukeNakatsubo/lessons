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
        COUNT = INPUTS[0];
  //
  let tmpMaxArray = [];
  let tmpMinArray = [];
  let hajimene;
  let owarine;
  //
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/).map(Number);
    tmpMaxArray.push(Math.max(...tmp));
    tmpMinArray.push(Math.min(...tmp));
    if (i === 0) { hajimene = tmp[0]; }
    if (i === COUNT - 1) { owarine = tmp[1]; }
  }
  //
  let takane = Math.max(...tmpMaxArray);
  let yasune = Math.min(...tmpMinArray);
  //
  console.log(hajimene + ' ' + owarine + ' ' + takane + ' ' + yasune);
});