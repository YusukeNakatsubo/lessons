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
  const [POCKET_COUNT, CARD_NUMBER] = lines[0].split(/\s/).map(Number);

  const PAGE_NUMBER = Math.floor((CARD_NUMBER - 1) / (POCKET_COUNT * 2)) + 1,
        PAGE_MAX_VALUE = PAGE_NUMBER * POCKET_COUNT * 2,
        PAGE_MIN_VALUE = PAGE_MAX_VALUE - (POCKET_COUNT * 2 - 1);

  console.log(PAGE_MAX_VALUE + PAGE_MIN_VALUE - CARD_NUMBER);
});