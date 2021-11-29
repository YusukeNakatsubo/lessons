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
        [SCHEDULE_COUNT, PARTS_A_COUNT, PARTS_B_COUNT] = INPUTS[0].split(/\s/).map(Number),
        SCHEDULE = INPUTS[1].split('').map(String),
        PARTS_A  = INPUTS[2].split('').map(String),
        PARTS_B  = INPUTS[3].split('').map(String);
  let partsAResult  = 0,
      partsBResult  = 0,
      partsACounter = 0,
      partsBCounter = 0;
  for (let i = 0; i < SCHEDULE_COUNT; i += 1) {
    let flag = SCHEDULE[i];
    if (flag === PARTS_A[partsACounter]) {
      partsAResult += 1;
      partsACounter += 1;
    } else {
      partsACounter += 0;
    }
    if (flag === PARTS_B[partsBCounter]) {
      partsBResult += 1;
      partsBCounter += 1;
    } else {
      partsBCounter += 0;
    }
  }
  const PARTS_A_REMAIN = PARTS_A_COUNT - partsAResult,
        PARTS_B_REMAIN = PARTS_B_COUNT - partsBResult;
  console.log(`${PARTS_A_REMAIN} ${PARTS_B_REMAIN}`);
});