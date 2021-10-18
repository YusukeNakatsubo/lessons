// This is a code with a 90% pass rate.
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
  const INPUTS = lines;
        [TIME, POSITION_X, POSITION_Y] = lines[0].split(/\s/).map(Number);
  let tmpPositionX = POSITION_X,
      tmpPositionY = POSITION_Y,
      result       = POSITION_X;
  for (let i = 0; i < TIME; i += 1) {
    let [tmpX, tmpY] = INPUTS[i+1].split(/\s/).map(Number);
    tmpPositionX += tmpX;
    tmpPositionY += tmpY;
    if (tmpPositionY <= 0) {
    //   console.log(result);
      break;
    }
    if (tmpPositionX > result) { result = tmpPositionX; }
  }
  console.log(result);
});