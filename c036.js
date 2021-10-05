// This is a code with a 60% pass rate. Why?
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
  const INPUTS  = lines,
        ENTRY_A = INPUTS[0].split(/\s/).map(Number),
        ENTRY_B = INPUTS[1].split(/\s/).map(Number),
        ROUND1  = INPUTS[2].split(/\s/).map(Number),
        ROUND2  = INPUTS[3].split(/\s/).map(Number);
  let roundAWinner, roundBWinner;
  let entryA1 = ENTRY_A[0] - 1,
      entryA2 = ENTRY_A[1] - 1,
      entryB1 = ENTRY_B[0] - 1,
      entryB2 = ENTRY_B[1] - 1;
  if (ROUND1[entryA1] < ROUND1[entryA2]) {
    roundAWinner = ENTRY_A[0];
  } else {
    roundAWinner = ENTRY_A[1];
  }
  if (ROUND1[entryB1] < ROUND1[entryB2]) {
    roundBWinner = ENTRY_B[0];
  } else {
    roundBWinner = ENTRY_B[1];
  }
  let entryF1Value, entryF2Value;
  if (entryF1Value < entryF2Value) {
    entryF1Value = ROUND2[0];
    entryF2Value = ROUND2[1];
  } else {
    entryF1Value = ROUND2[1];
    entryF2Value = ROUND2[0];
  }
  let winner, subWinner;
  if (entryF1Value < entryF2Value) {
    winner = roundAWinner;
    subWinner = roundBWinner
  } else {
    winner = roundBWinner;
    subWinner = roundAWinner;
  }
  console.log(winner);
  console.log(subWinner);
});