// This is a code with a 50% pass rate. Why?
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
  const rocks = hands.filter((h) => { return h === 'rock'; })
  const scissores = hands.filter((h) => { return h === 'scissors'; })
  const papers = hands.filter((h) => { return h === 'paper'; })
  if (rocks.length && scissores.length && papers.length) {
    console.log('draw');
  } else if (rocks.length && !scissores.length && !papers.length) {
    console.log('draw');
  } else if (!rocks.length && scissores.length && !papers.length) {
    console.log('draw');
  } else if (!rocks.length && !scissores.length && papers.length) {
    console.log('draw');
  } else if (rocks.length > scissores.length && !papers.length) {
    console.log('rock');
  } else if (scissores.length > papers.length && !rocks.length) {
    console.log('scissors');
  } else if (papers.length > rocks.length && !scissores.length) {
    console.log('paper');
  }
});