// 無理...解けない
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
[X, Y, Z] = INPUTS[0].split(/\s/).map(Number);

let cubicArr = Array(Y).fill(Array(Z).fill(null))
    zCounter = 0,
    yCounter = 0;
console.log(cubicArr);

for (let i = 0; i < Z; i += 1) {
  let tmpCellArr = INPUTS[i + 1].split('');
  // if (tmpCellArr[0] === '-') {
  //   continue;
  // }
  for (let j = 0; j < Y; j += 1) {
    if (tmpCellArr[j] === '#') {
      cubicArr[i][j] = '#';
    } else if (cubicArr[i][j] === null || cubicArr[i][j] === '.') {
      cubicArr[i][j] = '.';
    }
  }
}
console.log(cubicArr);
});