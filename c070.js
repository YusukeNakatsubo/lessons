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
  for (let i = 0; i < COUNT; i += 1) {
    let card = INPUTS[i + 1].split('').map(Number);
    let sortCard = card.sort((a, b) => {
      if (a > b) { return 1; }
      if (a < b) { return -1; }
      return 0;
    })
    // console.log(sortCard);
    let judgeCount = 0;
    for (let j = 0; j < sortCard.length; j += 1) {
      let tmpSortCard = new Set(sortCard);
      if (tmpSortCard.size === sortCard.length) {
        break;
      } else {
        if (sortCard[j] === sortCard[j + 1]) {
          judgeCount += 1;
        }
      }
    }
    // console.log(judgeCount);
    if (judgeCount === 3) {
      console.log('Four Card');
    // Three Card or Two Pair
    } else if (judgeCount === 2) {
      let countPair = sortCard.filter(n => n === sortCard[0]).length;
      countPair !== 2 ? console.log('Three Card') : console.log('Two Pair');
    } else if (judgeCount === 1) {
      console.log('One Pair');
    } else if (judgeCount === 0) {
      console.log('No Pair');
    }
  }
});