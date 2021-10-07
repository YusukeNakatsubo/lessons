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
  let tmpRankingList = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/).map(Number);
    tmpRankingList.push(tmp);
  }
  let rankingList = tmpRankingList.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return b[2] - a[2];
  })
  for (let i = 0; i < rankingList.length; i += 1) {
    console.log(rankingList[i].join(' '));
  }
});