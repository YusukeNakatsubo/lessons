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
  const DATA = lines,
        AREA_COUNT = Number(DATA[0]);

  let requiredTimeArr = [],
      travelTimeArr   = [];
  for (let i = 0; i < AREA_COUNT; i += 1) {
    requiredTimeArr.push(Number(DATA[i + 1]));
    travelTimeArr.push(DATA[i + 1 + AREA_COUNT].split(/\s/).map(Number));
  }

  const SCHEDULE_COUNT = DATA[1 + AREA_COUNT + AREA_COUNT];
  let scheduleArr = [];
  for (let i = 0; i < SCHEDULE_COUNT; i += 1) {
    scheduleArr.push(Number(DATA[i + 1 + AREA_COUNT + AREA_COUNT + 1]));
  }

  let result = 0;
  for (let i = 0; i < SCHEDULE_COUNT; i += 1) {
    result += requiredTimeArr[scheduleArr[i] - 1];
    if (i + 1 < SCHEDULE_COUNT) {
      result += travelTimeArr[scheduleArr[i] - 1][scheduleArr[i + 1] - 1];
    }
  }
  console.log(result);

});