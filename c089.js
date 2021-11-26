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
        [HEIGHT, WIDTH] = INPUTS[0].split(/\s/).map(Number);
  let board = [],
      score = [],
      point = 0;
  for (let i = 0; i < HEIGHT; i += 1) { score.push(INPUTS[i + 1].split('')); }
  let totalScore = [];
  for (let i = 0; i < score.length; i += 1) { totalScore = totalScore.concat(score[i]); }
  for (let i = 0; i < HEIGHT; i += 1) { board.push(INPUTS[i + 1 + HEIGHT].split(/\s/)); }
  let totalBoard = [];
  for (let i = 0; i < board.length; i += 1) { totalBoard = totalBoard.concat(board[i]); }
  for (let i = 0; i < totalBoard.length; i += 1) {
    if (totalScore[i] === 'o') { point += Number(totalBoard[i]); }
  }
  console.log(point);
});