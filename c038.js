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
  // 理解するのに時間がかかった、100%の通過率にならない
  const INPUTS        = lines,
        INPUT         = INPUTS[0].split(/\s/).map(Number),
        MACHINE_COUNT = INPUT[0],
        SWEETS_COUNT  = INPUT[1];
  let sweetsCount  = SWEETS_COUNT,
      machine      = 0,
      machineIndex = 0;
  for (let i = 0; i < MACHINE_COUNT; i += 1) {
    // 最も小さい容量の機器を探したい
    let tmpMachine = Number(INPUTS[i+1]);
    // 余りが出なくなったら処理しない
    if (SWEETS_COUNT % tmpMachine < sweetsCount) {
      sweetsCount = sweetsCount % tmpMachine;
      machine = tmpMachine;
      machineIndex = i + 1;
    // 余りが出ないかつ容量が大きかったら処理しない
    } else if (SWEETS_COUNT % tmpMachine === sweetsCount && machine < tmpMachine) {
      machine = tmpMachineCount;
      machineIndex = i + 1;
    }
  }
  console.log(machineIndex);
});