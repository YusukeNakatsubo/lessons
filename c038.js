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
  const INPUTS        = lines,
        INPUT         = INPUTS[0].split(/\s/).map(Number),
        MACHINE_COUNT = INPUT[0],
        SWEETS_COUNT  = INPUT[1];
  let sweetsCount  = SWEETS_COUNT,
      machine      = 0,
      machineIndex = 0;
  for (let i = 0; i < MACHINE_COUNT; i += 1) {
    let tmpMachine = Number(INPUTS[i+1]);
    if (SWEETS_COUNT % tmpMachine < sweetsCount) {
      sweetsCount = sweetsCount % tmpMachine;
      machine = tmpMachine;
      machineIndex = i + 1;
    } else if (SWEETS_COUNT % tmpMachine === sweetsCount && machineCount < tmpMachine) {
      machine = tmpMachineCount;
      machineIndex = i + 1;
    }
  }
  console.log(machineIndex);
});