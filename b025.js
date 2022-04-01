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
        [GREEN, RABBIT, JUMP] = INPUTS[0].split(/\s/).map(Number);

  let rabbitPositionArr = Array(RABBIT).fill(0),
      rabbitFlagArr     = Array(GREEN).fill(false);
  for (let i = 0; i < RABBIT; i += 1) {
    rabbitPositionArr[i] = Number(INPUTS[i + 1]) - 1;
    rabbitFlagArr[rabbitPositionArr[i]] = true;
  }

  for (let i = 0; i < JUMP; i += 1) {
    for (let j = 0; j < RABBIT; j += 1) {
      let currentRabbitPosition = rabbitPositionArr[j];
      while (rabbitFlagArr[rabbitPositionArr[j]]) {
        rabbitPositionArr[j] += 1;
        if (rabbitPositionArr[j] > GREEN - 1) rabbitPositionArr[j] -= GREEN;
      }
      rabbitFlagArr[rabbitPositionArr[j]] = true;
      rabbitFlagArr[currentRabbitPosition] = false;
    }
  }

  for (let i = 0; i < RABBIT; i += 1) {
    console.log(rabbitPositionArr[i] + 1);
  }
});