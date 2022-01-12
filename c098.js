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
  let ballholding = [];
  for (let i = 0; i < COUNT; i += 1) { ballholding.push(Number(INPUTS[i + 1])); }
  const PASS_COUNT = INPUTS[COUNT + 1];
  for (let i = 0; i < PASS_COUNT; i += 1) {
    let passLog   = INPUTS[i + COUNT + 2].split(/\s/).map(Number),
        passer    = passLog[0] - 1,
        receiver  = passLog[1] - 1,
        ballCount = passLog[2];
    if (ballholding[passer] <= ballCount) {
      ballholding[receiver] += ballholding[passer];
      ballholding[passer] -= ballholding[passer];
    } else {
      ballholding[receiver] += ballCount;
      ballholding[passer] -= ballCount;
    }
  }
  console.log(ballholding.join('\n'));
});