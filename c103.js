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
        [ROBOT_TIME_COUNT, ROBOT_ACTION_COUNT] = INPUTS[0].split(/\s/).map(Number);
  let robotTimeAry   = [],
      robotActionAry = [];
  for (let i = 0; i < ROBOT_ACTION_COUNT; i += 1) {
    let [tmpRobotTime, tmpRobotAction] = INPUTS[i + 1].split(/\s/);
    robotTimeAry.push(Number(tmpRobotTime));
    robotActionAry.push(tmpRobotAction);
  }
  for (let i = 1; i <= ROBOT_TIME_COUNT; i += 1) {
    let flag   = 0,
        result = [];
    for (let j = 0; j < ROBOT_ACTION_COUNT; j += 1) {
      if(i % robotTimeAry[j] === 0) {
        result.push(robotActionAry[j]);
        flag += 1;
      }
    }
    flag === 0 ? console.log(i) : console.log(result.join(' '));
  }
});