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
        COUNT  = Number(INPUTS[0]);

  let cardArr = INPUTS[1].split(/\s/).map(Number);
  let newCardArr = cardArr.sort((a, b) => { return a - b; });

  let result  = 0;
  for (let i = 0; i < COUNT - 1; i += 1) {
    let previousCard = newCardArr[i],
        currentCard  = newCardArr[i + 1];

    let difference = currentCard - previousCard;
    if (difference !== 1) result += previousCard;
  }
  result += newCardArr.slice(-1)[0];

  console.log(result);
});