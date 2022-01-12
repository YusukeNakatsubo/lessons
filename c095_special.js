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
        [BUS_COUNT, DESIRED_TIME] = INPUTS[0].split(/\s/).map(Number);
  let result = [];
  for (let i = 0; i < BUS_COUNT; i += 1) {
    let tmpTime   = Number(INPUTS[i + 1]),
        tmpResult = Math.abs(DESIRED_TIME - tmpTime);
    if (result.length === 0) { result.push(tmpTime); }
    if (result.length !== 0) {
      let compareTime   = result.slice(- 1)[0],
          compareResult = Math.abs(DESIRED_TIME - compareTime);
      if (compareResult > tmpResult) {
        let removeValue = [];
        removeValue.push(compareTime);
        result = result.filter((value) => {
          return ! removeValue.includes(value);
        })
        result.push(tmpTime);
      } else if (compareResult === tmpResult) {
        result.push(tmpTime);
      }
    }
  }
  const output = [...new Set(result)].sort();
  console.log(output.join('\n'));
});