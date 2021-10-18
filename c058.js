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
  const INPUT = lines;
  let [count, correctStr, defaultStr] = INPUT[0].split(/\s/);
  let result = 0;
  for (let i = 0; i < count; i += 1) {
    if (correctStr !== defaultStr) {
      correctStr = correctStr.substr(-1) + correctStr.substr(0, count - 1);
      result += 1;
    } else {
      console.log(result);
      break;
    }
  }
});