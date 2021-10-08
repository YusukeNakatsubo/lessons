// This is a code with a 80% pass rate. Why?
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
        NUMBER = INPUTS[0];
  let hands = [];
  for (let i = 0; i < NUMBER; i += 1) {
    hands.push(INPUTS[i+1]);
  }
  const ROCK_COUNT     = (hands.filter((h) => { return h === 'rock'; })).length,
        SCISSORS_COUNT = (hands.filter((h) => { return h === 'scissors'; })).length,
        PAPER_COUNT    = (hands.filter((h) => { return h === 'paper'; })).length;
  if (ROCK_COUNT > 0 && SCISSORS_COUNT > 0 && PAPER_COUNT > 0) {
    console.log('draw');
  } else if (ROCK_COUNT === SCISSORS_COUNT || SCISSORS_COUNT === PAPER_COUNT || PAPER_COUNT === ROCK_COUNT) {
    console.log('draw');
  } else if (hands.includes('rock') === false) {
    console.log('scissors');
  } else if (hands.includes('scissors') === false) {
    console.log('paper');
  } else if (hands.includes('paper') === false) {
    console.log('rock');
  }
});