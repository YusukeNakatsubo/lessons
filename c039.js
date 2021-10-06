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
  const INPUT = lines[0].split(/\+/);
  let result = [];
  for (let i = 0; i < INPUT.length; i += 1) {
    let tmp          = INPUT[i],
        slashCount   = (tmp.match(/\//g) || [] ).length,
        bracketCount = (tmp.match(/</g) || [] ).length,
        tmpNumberStr = String(bracketCount) + String(slashCount),
        tmpNumberNum = Number(tmpNumberStr);
    result.push(tmpNumberNum);
  }
  console.log(result.reduce((a,b) => { return a + b }, 0));
});