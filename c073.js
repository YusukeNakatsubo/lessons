// This is a code with a 60% pass rate. Ummm...
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
        DISATNCE = Number(INPUTS[0]),
        [USAGI_SPEED, HANDICAP_DISTANCE, HANDICAP_TIME] = INPUTS[1].split(/\s/).map(Number);
        KAME_SPEED = Number(INPUTS[2]);
  const usagiHandicapTime = (Math.floor(DISATNCE / HANDICAP_DISTANCE) - 1) * HANDICAP_TIME;
  const usagiTime = DISATNCE * USAGI_SPEED + usagiHandicapTime;
  const kameTime  = DISATNCE * KAME_SPEED;
  if (usagiTime === kameTime) {
    console.log('DRAW');
  } else if (usagiTime > kameTime) {
    console.log('KAME');
  } else if (usagiTime < kameTime) {
    console.log('USAGI')
  }
});